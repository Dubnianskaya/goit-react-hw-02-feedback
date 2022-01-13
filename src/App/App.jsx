import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  static defaultProps = {
    total: 0,
    percentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
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
    this.setState({
      total: this.countTotalFeedback(),
    });
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleStatistics}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.props.total}
            positivePercentage={0}
          />
        </Section>
      </div>
    );
  }
}

export default App;
