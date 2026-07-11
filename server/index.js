require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRouter = require("./routes/contact");

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/contact", contactRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Rohaan portfolio API listening on port ${port}`);
});
