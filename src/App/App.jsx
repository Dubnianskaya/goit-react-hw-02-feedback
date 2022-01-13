import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Statistics/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatistics = index => {
    const statesKey = Object.keys(this.state)[index];
    if (statesKey === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (statesKey === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (statesKey === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  render() {
    const feedbackType = this.state;
    const countTotalFeedback = Object.values(feedbackType).reduce(
      (total, value) => total + value,
      0,
    );
    const countPositiveFeedbackPercentage = Math.round(
      (100 / countTotalFeedback) * this.state.good,
    );

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedbackType)}
            onLeaveFeedback={this.handleStatistics}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={feedbackType.good}
              neutral={feedbackType.neutral}
              bad={feedbackType.bad}
              total={countTotalFeedback}
              positivePercentage={
                Number.isNaN(countPositiveFeedbackPercentage)
                  ? 0
                  : countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
