exports.checkUser = (req, res, next) => {
  const password = req.body.password;
  if (password === "1234") {
    next();
  } else {  
    res.status(401).send("wrong password");
  }
};
