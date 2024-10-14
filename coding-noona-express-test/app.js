const express = require("express");
const app = express();

// const token = null;
const token = "asdf";

// app.get("/", (req, res) => {
//   res.send("hello noona world");
// });

const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};

const checkToken = (req, res, next) => {
  if (token) {
    next();
  } else {
    console.log("you dont have token");
    res.send("you dont have token");
  }
};

const getUser = (req, res) => {
  console.log("here is user info");
  res.send("here is user info");
};

app.get("/users", checkAuth, checkToken, getUser);

app.listen(5000, () => {
  console.log("server is on 5000");
});
