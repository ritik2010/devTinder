const express = require("express");
const app = express();

app.get(
  "/abc",
  [
    (req, res, next) => {
      // res.send("hello from abc function 1");
      next();
    },
    (req, res, next) => {
      // res.send("hello from abc function 2");
      next();
    },
  ],
  (req, res, next) => {
    res.send("hello from abc function 3");
    next();
  },
  (req, res, next) => {
    res.send("hello from abc function 4");
    next();
  }
);
// app.post("/user", (req, res) => {
//   res.send("user created");
// });
// app.get("/user/:userId/:name/:age", (req, res) => {
//   console.log(req.params);
//   res.send({ name: "Ritik", age: "30" });
// });
// app.delete("/user/delete", (req, res) => {
//   res.send("user deleted");
// });

// app.use("/", (req, res) => {
//   res.send("hello from dashboard");
// });

app.listen(5000, () => {
  console.log("port is running");
});
