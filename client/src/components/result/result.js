import React, { Component } from "react";
import "./result.css";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/datesToShow")
      .then(res => res.json())
      .then(results => this.setState({ results }));
  }

  render() {
    return (
      <div>
        <h2>Days that are Primes themselves</h2>
        <ul>
          {this.state.results.map(result => (
            <li key={result.id}> {result.date} </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Result;
