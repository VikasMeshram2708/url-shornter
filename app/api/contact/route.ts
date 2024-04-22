import { FormInput } from "@/models/FormInput";
import { ContactColl, clientInstance } from "@/utils/Db";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    // Sanitize the incoming data
    FormInput.parse(reqBody);

    // connect to DB
    await clientInstance.connect();

    // Insert to DB
    await ContactColl.insertOne({
      name: reqBody?.name,
      email: reqBody?.email,
      message: reqBody?.message,
      createdAt: new Date().toLocaleDateString(),
    });

    // return the response
    return NextResponse.json({
      success: true,
      message: "Form Submitted.",
    });
  } catch (error) {
    const err = error as Error;
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          success: true,
          message: err?.message,
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json(
      {
        success: true,
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
