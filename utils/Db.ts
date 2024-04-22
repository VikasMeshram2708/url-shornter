import { MongoClient } from "mongodb";

const { NEXT_PUBLIC_DB_URL, NEXT_PUBLIC_DB_NAME } = process.env;

if (!NEXT_PUBLIC_DB_URL)
  throw new Error("Missing Database connection string.");

export const clientInstance = new MongoClient(NEXT_PUBLIC_DB_URL!);

export const db = clientInstance.db(NEXT_PUBLIC_DB_NAME)

export const UrlColl = db.collection('tinyUrls');
export const ContactColl = db.collection('tinyUrlsContact');

