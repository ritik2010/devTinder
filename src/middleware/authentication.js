//  authentication for admin
const admminAuth = (req, res, next) => {
  const adminTocken = "Admin@123";
  const isAuth = adminTocken === "Admin@123";
  if (!isAuth) {
    res.status(401).send("Unauthorized Admin");
  }
  next();
};

//  authentication for user
const userAuth = (req, res, next) => {
  const userTocken = "User@123";
  const isAuth = userTocken === "User@123";
  console.log("isAuth", isAuth);
  if (!isAuth) {
    res.status(401).send("Unauthorized User");
  }
  next();
};

module.exports = { admminAuth, userAuth };
