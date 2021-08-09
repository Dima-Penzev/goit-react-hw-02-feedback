import React, { Component } from 'react';
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = (e) => {
    if (e.target.innerText === "Good") {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (e.target.innerText === "Neutral") {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (e.target.innerText === "Bad") {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = Math.round(good * 100 / total);

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={this.handleIncrement} />
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback:  {total !== 0 ? percentage : 0}%</p>
      </div >
    );
  }
}

export default App;
