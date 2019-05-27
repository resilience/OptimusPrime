const express = require("express");
const joi = require("joi");
const app = express();


// sample API request
// https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&start=2013-09

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/priceData", (req, res, next) => {
  const datesToCollect = [];
  res.json(datesToCollect);
});

app.get("/api/datesToShow", (req, res, next) => {
  const datesToShow = [];

  res.json(datesToShow);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`...listening on port ${port}`));
