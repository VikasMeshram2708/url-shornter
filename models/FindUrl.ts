import * as z from "zod";

export const SlugSchema = z.object({
  slug: z.string(),
});

export type SlugSchemaProp = z.infer<typeof SlugSchema>;
