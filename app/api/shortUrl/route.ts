import { UrlSchema, UrlSchemaProp } from "@/models/UrlModel";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { ZodError } from "zod";
import { UrlColl, clientInstance } from "@/utils/Db";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody: UrlSchemaProp = await request.json();

    const { url } = reqBody;

    // Sanitize the incoming data
    UrlSchema.parse({ url });

    // Unique ID
    const uniqueSlug = nanoid(7).toLowerCase();

    // Connect to DB
    await clientInstance.connect();

    // check if the slug is already in use or not
    const validateSlug = await UrlColl.findOne({
      slug: uniqueSlug,
    });

    if (validateSlug) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug is already in use.",
        },
        {
          status: 422,
        }
      );
    }

    // Insert into DB
    const savedTinyUrls = await UrlColl.insertOne({
      slug: uniqueSlug,
      url: url,
      createdAt: new Date().toLocaleDateString(),
    });

    // return tinyURL in the response
    return NextResponse.json(
      {
        success: true,
        data: savedTinyUrls,
        uniqueSlug,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    const err = error as Error;
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: err?.issues[0]?.message,
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: err?.message,
      },
      {
        status: 500,
      }
    );
  }
};
