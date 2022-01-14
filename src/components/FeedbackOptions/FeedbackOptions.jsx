import React from 'react';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
