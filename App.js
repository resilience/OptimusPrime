import React from "react";

import "./App.css";
import Collection from "./components/collection/collection";
import Result from "./components/result/result";

const request = require("request");
var totalPrimes = [];

// find total number of primes in price as max

function totalPrimeNumbers(max) {
  var store = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }

  totalPrimes.push(primes.length);
}

// evaluate if total number of primes is a prime

function isOptimusPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1, console.log(value);
}

// Main Application

class App extends React.Component {
  state = {
    startDate: "",
    endDate: ""
  };

  // 1. Take date input and fetch array of prices for those dates
  // 2. Take those prices and for each day, total the primes that it contains
  // 3. if the total is a prime, add to new array

  process = (startDate, endDate) => {
    
    // Build API Call
    const baseReqUrl = "https://api.coindesk.com/v1/bpi/historical/close.json?";

    var url = baseReqUrl + "start=" + startDate + "&end=" + endDate;

    console.log(url);

    request(url, { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }

      console.log(res.body.bpi);

      var data = res.body.bpi;

      var dates = [];
      var prices = [];

      for (var property in data) {
        if (!data.hasOwnProperty(property)) {
          continue;
        }
        dates.push(property);
        prices.push(data[property]);
      }
      console.log(dates);
      console.log(prices);

      prices.forEach(price => totalPrimeNumbers(price));

      totalPrimes.forEach(result => isOptimusPrime(result));
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Collection onDateSubmit={this.process} />
        </header>
        <Result />
      </div>
    );
  }
}

export default App;
