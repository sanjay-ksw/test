const app = require("express")();
require("dotenv").config();
const users = require("./db.js");
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  const newUser = await users.create({
    name: "sanjay",
    username: "archana",
    email: "imissher",
  });
  res.send(newUser);
});

app.listen(PORT);
