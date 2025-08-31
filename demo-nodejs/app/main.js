const express = require('express');
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = 3000;


app.get("/uuid", (req, res) => {
  const id = uuidv4();
  res.json({ uuid: id });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});