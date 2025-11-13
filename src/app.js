const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("////////////");
});

app.get("/hii", (req, res) => {
  res.send("hiiiiiiiiiiii ");
});

app.get("/hello", (req, res) => {
  res.send("helloooooooooooooo");
});

app.listen(5000, () => {
  console.log("port is running");
});
