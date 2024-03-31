import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("HEEEEEEELLLLLLLOOOOOOO");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
