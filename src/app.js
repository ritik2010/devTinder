const express = require("express");
const app = express();

// app.get("/abc", (req, res) => {
//   res.send("hello from abcccccccc");
// });
app.post("/user", (req, res) => {
  res.send("user created");
});
app.get("/user/:userId/:name/:age", (req, res) => {
  console.log(req.params);
  res.send({ name: "Ritik", age: "30" });
});
app.delete("/user/delete", (req, res) => {
  res.send("user deleted");
});

// app.use("/", (req, res) => {
//   res.send("hello from dashboard");
// });

app.listen(5000, () => {
  console.log("port is running");
});
