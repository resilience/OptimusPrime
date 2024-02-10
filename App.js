import React from "react";
import "./App.css";
import Collection from "./components/collection/collection";
import Result from "./components/result/result";

class App extends React.Component {
  state = {
    startDate: "",
    endDate: ""
  };

  // Helper method to find total number of prime numbers up to 'max'
  totalPrimeNumbers = (max) => {
    const store = [];
    const primes = [];
    for (let i = 2; i <= max; ++i) {
      if (!store[i]) {
        primes.push(i);
        for (let j = i * 2; j <= max; j += i) {
          store[j] = true;
        }
      }
    }
    return primes.length;
  };

  // Helper method to check if a number is prime
  isOptimusPrime = (value) => {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  };

  // Process method to handle the main logic
  process = (startDate, endDate) => {
    const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const prices = Object.values(data.bpi);
        const totalPrimes = prices.map(this.totalPrimeNumbers);
        const optimusPrimes = totalPrimes.filter(this.isOptimusPrime);
        console.log(optimusPrimes);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  // Render method
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
