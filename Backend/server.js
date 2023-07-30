const express = require("express");
const data = require("./data");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/products", (req, res) => {
  res.status(200).send(data);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
