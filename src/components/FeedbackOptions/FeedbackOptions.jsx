import React from 'react';
import { FeedbackButtons } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(key => (
      <FeedbackButtons
        key={key}
        type="button"
        onClick={() => onLeaveFeedback(key)}
      >
        {key[0].toUpperCase() + key.substring(1)}
      </FeedbackButtons>
    ))}
  </div>
);

export default FeedbackOptions;
