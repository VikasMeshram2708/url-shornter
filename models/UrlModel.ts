import * as z from "zod";

export const UrlSchema = z.object({
  url: z.string().url(),
});

export type UrlSchemaProp = z.infer<typeof UrlSchema>