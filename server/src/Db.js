const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DB_URL);

const db = client.db(process.env.DB_NAME);

// URL Collection
const UrlColl = db.collection("tinyUrl");

module.exports = {
  client,
  db,
  UrlColl,
};
