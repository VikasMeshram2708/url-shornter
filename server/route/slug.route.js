const express = require("express");
const SlugSchema = require("../models/slug.model");
const ShortUniqueId = require("short-unique-id");
const { client, UrlColl } = require("../src/Db");

const router = express.Router();
// bbs7DPjRu6

// Create new tiny url
router.post("/createSlug", async (req, res) => {
  try {
    // Sanitize the incoming data
    const reqBody = req.body;

    const { url } = reqBody;

    await SlugSchema.validateAsync({ url });

    // Generate Unique Id
    const uid = new ShortUniqueId({ length: 10 });

    // connect to DB
    await client.connect();

    // insert into DB.
    const savedTinyUrl = await UrlColl.insertOne({
      slug: uid.rnd().toLowerCase(),
      url: url,
      created_at: new Date().toLocaleDateString(),
    });

    // return the response
    return res.status(201).json({
      success: true,
      savedTinyUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message,
    });
  } finally {
    await client.close();
  }
});

// Access tiny url
router.get("/:slug", async (req, res) => {
  try {
    // Sanitize the incoming data
    const reqBody = req.params;

    const { slug } = reqBody;

    if (!slug) {
      throw new Error("Slug is not provided.");
    }

    // connect to DB
    await client.connect();

    // find the url using slug.
    const savedTinyUrl = await UrlColl.findOne({ slug });

    const { url } = savedTinyUrl;

    res.redirect(url);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message,
    });
  } finally {
    await client.close();
  }
});

module.exports = router;
