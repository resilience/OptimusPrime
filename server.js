const express = require("express");
const joi = require("joi");
const app = express();

// Gil Candidate Test
// github repo :

// The ASK
// - in the daily bitcoin price for a given period (input from a user but max
//   6 months period), on which days is the total number of the prime numbers in
//   that price, a prime number itself
// - pull the bitcoin price from somewhere, don’t hard code it
// - write the program in some JavaScript based language (react, node, etc)
// - create a basically styled interface, but with some polish

// Breakdown of the ask:
// Build Interface for user to specify period  ( max 6 month period ) and coin type in React
// Send selection to App backend on submit
//
// Backend makes API call based on params & retrieves price data from selected source
// for each day, find all prime numbers in price
// if the total prime numbers for a day is a prime, add date to list
// return final date list to React when done

// HANDLE INPUT

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
