import React from 'react';

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;

// class Section extends React.Component {
//     state = {
//         good: this.props.good,
//         neutral: this.props.neutral,
//         bad: this.props.bad,
//       }

//     handleStatistics = (event) => {
//         // const target = event.target.id;
//         this.setState((prevState) => ({
//            good: prevState.good + 1,
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Please leave feedback</h2>
//                <FeedbackOptions onCountStatistics={this.handleStatistics} />
//                 <h2>Statistics</h2>
//                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={0} positivePercentage={0}/>
//             </div>
//         );
//     }
// }
