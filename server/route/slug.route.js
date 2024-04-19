const express = require("express");
const SlugSchema = require("../models/slug.model");
const ShortUniqueId = require("short-unique-id");

const router = express.Router();

router.get("/createSlug", async (req, res) => {
  try {
    // Sanitize the incoming data
    const reqBody = req.body;

    const { url } = reqBody;

    await SlugSchema.validateAsync({ url });

    // Generate Unique Id
    const uid = new ShortUniqueId({ length: 10 });

    const uniqueUrl = {
      slug: uid.rnd(),
      url: url,
    };

    // short the url
    // insert into DB.
    // return the response
    return res.status(201).json({
      success: true,
      message: uniqueUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
});

module.exports = router;
