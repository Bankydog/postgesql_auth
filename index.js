import express from "express";
import postRouter from "./apps/posts.js";

const app = express();
const port = 4000;

app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("HEEEEEEELLLLLLLOOOOOOO");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
