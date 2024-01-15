const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "niku",
      age: 5,
    },
    {
      id: 2,
      name: "kuku",
      age: 10,
    },
    {
      id: 3,
      name: "aswal",
      age: 25,
    },
    {
      id: 4,
      name: "shan",
      age: 40,
    },
    {
      id: 5,
      name: "ank",
      age: 35,
    },
  ]);
});

app.listen(5500, () => {
  console.log("app is running");
});
