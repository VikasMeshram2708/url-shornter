import { UrlSchema, UrlSchemaProp } from "@/models/UrlModel";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { ZodError } from "zod";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody: UrlSchemaProp = await request.json();
    // Sanitize the incoming data
    const { url } = reqBody;
    // console.log("log", url);

    UrlSchema.parse({ url });

    // Unique ID
    const uniqueSlug = nanoid().toLowerCase();
    // console.log("uid", uniqueSlug);

    // New Tiny URL
    const newUrl = {
      uniqueSlug,
      url: url,
    };

    // return tinyURL in the response
    return NextResponse.json(
      {
        success: true,
        data: newUrl,
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
