import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Statistics/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatistics = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((100 / total) * this.state.good);
  };

  render() {
    const feedbackType = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedbacks);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedbackType)}
            onLeaveFeedback={this.handleStatistics}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={feedbackType.good}
              neutral={feedbackType.neutral}
              bad={feedbackType.bad}
              total={totalFeedbacks}
              positivePercentage={
                Number.isNaN(positivePercentage) ? 0 : positivePercentage
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
