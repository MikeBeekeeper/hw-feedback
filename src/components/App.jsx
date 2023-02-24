
import React, { Component } from "react";
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
  
  
  onGoodClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    })
  };

  onNeutralClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  };

  onBadClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    })
  }
 

  

  
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = good / total * 100;

    return (
    <div className={css.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodClick={this.onGoodClick}
            onNeutralClick={this.onNeutralClick}
            onBadClick={this.onBadClick}
          />
      </Section>
        <Section title="Statistics">
          {total === 0 ? <Notification message="There is no feedback" />
          : <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad} 
            total={total}
            percent={Math.round(percentage)}/>} 
          
      </Section>
    </div>
  );
  }
  
  
};
