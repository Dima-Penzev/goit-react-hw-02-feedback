import React, { Component } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import s from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    if (e.target.innerText === "Good") {
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    } else if (e.target.innerText === "Neutral") {
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (e.target.innerText === "Bad") {
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              options={[
                { name: "Good", value: good },
                { name: "Neutral", value: neutral },
                { name: "Bad", value: bad },
                { name: "Total", value: this.countTotalFeedback() },
                {
                  name: "Positive feedback",
                  value: this.countPositiveFeedbackPercentage(),
                },
              ]}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
