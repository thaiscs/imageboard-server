const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Image = require("./model");

app.listen(port, () => console.log(`Listening on port ${port}`));
