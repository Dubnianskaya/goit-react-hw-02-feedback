import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option, index) => (
      <button key={option} type="button" onClick={() => onLeaveFeedback(index)}>
        {option[0].toUpperCase() + option.substring(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
