const express = require("express");
const { add, subtract } = require("./bundle/node-bundle.js");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  const result = add(a, b);
  res.json({ result });
});

app.post("/subtract", (req, res) => {
  const { a, b } = req.body;
  const result = subtract(a, b);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
