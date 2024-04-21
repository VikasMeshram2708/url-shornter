import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { UrlColl, clientInstance } from "@/utils/Db";
import { DbUrl } from "@/interfaces/DbStruct";

export const GET = async (request: NextRequest) => {
  try {
    const param = request.nextUrl.searchParams;

    const paramSlug = param.get("redirectSlug");

    // Connect to DB
    await clientInstance.connect();

    // Find the url
    // @ts-ignore
    const getUrl: DbUrl = await UrlColl.findOne({
      slug: paramSlug,
    });
    const { url } = getUrl;

    // console.log("g", url);

    // Redirect to that url
    // return NextResponse.redirect(url);
    return NextResponse.json({
      success: true,
      url: url,
    });
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
  } finally {
    await clientInstance.close();
  }
};
