import * as z from "zod";

export const FormInput = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be 2 characters long",
    })
    .max(100, {
      message: "Name must be fewer than 100 characters.",
    }),
  email: z.string().email(),
  message: z
    .string()
    .min(2, {
      message: "Message must be 2 characters long",
    })
    .max(100, {
      message: "Message must be fewer than 100 characters.",
    }),
});


export type FormInputProp = z.infer<typeof FormInput>;