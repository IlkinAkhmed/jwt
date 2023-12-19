const express = require("express");
const { checkUser } = require("./src/middleware/checkUser");
const jwt = require("jsonwebtoken")
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.static("public"));
const PrivateKey = 'sdf552344@!#w__'

const users = [
  {
    username: "IlkinAkhmed",
    password: "ilkin123"
  },
  {
    username: "Samir",
    password: "samir123"
  },
  {
    username: "Tural",
    password: "tural23"
  },
]


app.post("/login", (req, res) => {
  const { username, password } = req.body
  const user = users.find(x => x.username === username)
  if (!user) {
    res.status(404).send('User not found!!')
  }
  if (user.password !== password) {
    res.status(403).send("wrong details!!!");
  }
  const token = jwt.sign({ username: username }, PrivateKey)
  res.send(token)
});

app.get("/login", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log("server 5000 portunda calisir ");
});
