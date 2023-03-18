import React, { Component } from 'react';
import css from '../components/app.module.css';
import Section from './Section/Section.js';
import Statistics from './statistics/statistics.js';
import Notification from './notification/Notification.js';
import FeedbackOptions from './feedbackButtons/FeedbackOptions.js';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = e => {
    const value = e.target.textContent;
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countingTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countingPercentage = () => {
    return (this.state.good / this.countingTotal()) * 100;
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div className={css.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleClick={this.onClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countingTotal() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countingTotal()}
              percent={Math.round(this.countingPercentage())}
            />
          )}
        </Section>
      </div>
    );
  }
}
