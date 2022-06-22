import express from "express";
import database from "./config/config.js";
import "dotenv/config";
import bodyParser from "body-parser";
// import path from "path";
// import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
const app = express();
// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

database();
const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from my-express-app!" });
});

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
