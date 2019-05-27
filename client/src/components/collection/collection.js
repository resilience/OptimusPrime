import React, { Component } from "react";
import "./collection.css";

export default class Collection extends Component {
  state = {
    startDate: "",
    endDate: ""
  };

  handleStartDateChange = e => {
    this.setState({
      startDate: e.target.value
    });
  };
  handleEndDateChange = e => {
    this.setState({
      endDate: e.target.value
    });
  };

  handleDateSubmit = e => {
    e.preventDefault();

    this.props.onDateSubmit(this.state.startDate, this.state.endDate);
  };
  render() {
    const { startDate } = this.state.startDate;
    const { endDate } = this.state.endDate;

    return (
      <div>
        <h5> Select your dates: </h5>

        <form onSubmit={this.handleDateSubmit}>
          <div>
            <input
              type="date"
              value={startDate}
              onChange={this.handleStartDateChange}
              name="startdate"
              id="startdate"
            />
          </div>

          <div>
            <input
              type="date"
              value={endDate}
              onChange={this.handleEndDateChange}
              name="enddate"
              id="enddate"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
