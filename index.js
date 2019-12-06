const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");
const Image = require("./model");
const imageRouter = require("./image/router");
const cors = require("cors");
const bodyParser = require("body-parser");
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();
const authRouter = require("./auth/router");
const userRouter = require("./user/router");

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(imageRouter);
app.use(authRouter);
app.use(userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
