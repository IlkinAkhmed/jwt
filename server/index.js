const express = require("express");
const { checkUser } = require("./src/middleware/checkUser");
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.static("public"));

// const MyLogger = (req, res, next) => {
//   console.log("LOGGED");
//   next();
// };

// const MyDate = (req, res, next) => {
//   console.log(new Date(Date.now()));
//   next();
// };

// app.get("/products", MyDate, (req, res) => {
//   res.send("Prdoucts");
// });

app.post("/login", checkUser, (req, res) => {
  console.log("user logined");
  res.send("welcome to your account");
});

app.listen(PORT, () => {
  console.log("server 5000 portunda calisir ");
});
