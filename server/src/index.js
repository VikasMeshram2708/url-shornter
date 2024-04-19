const express = require("express");
require("dotenv").config();

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello,from,server!",
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
