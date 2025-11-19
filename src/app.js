const express = require("express");
const app = express();
const { admminAuth, userAuth } = require("./middleware/authentication");
app.use("/admin", admminAuth);
app.get("/admin/getData", (req, res) => {
  res.send("admin data send succesfully");
});
app.use("/admin/delete", (req, res) => {
  res.send("admin data has been deleted succesfully");
});
app.use("/user", userAuth);
app.get("/user/getData", (req, res) => {
  res.send("user data send succesfully");
});
app.get("/user/delete", (req, res) => {
  res.send("user data has been deleted succesfully");
});
// app.get(
//   "/abc",
//   [
//     (req, res, next) => {
//       // res.send("hello from abc function 1");
//       next();
//     },
//     (req, res, next) => {
//       // res.send("hello from abc function 2");
//       next();
//     },
//   ],
//   (req, res, next) => {
//     res.send("hello from abc function 3");
//     next();
//   },
//   (req, res, next) => {
//     res.send("hello from abc function 4");
//     next();
//   }
// );

app.listen(5000, () => {
  console.log("port is running");
});
