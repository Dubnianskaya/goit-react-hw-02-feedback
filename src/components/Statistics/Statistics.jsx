import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticList,
  StatisticData,
  StatisticResults,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticList>
    <li>
      <StatisticData>Good:</StatisticData>
      <StatisticResults>{good}</StatisticResults>
    </li>
    <li>
      <StatisticData>Neutral:</StatisticData>
      <StatisticResults>{neutral}</StatisticResults>
    </li>
    <li>
      <StatisticData>Bad:</StatisticData>
      <StatisticResults>{bad}</StatisticResults>
    </li>
    <li>
      <StatisticData>Total:</StatisticData>
      <StatisticResults>{total}</StatisticResults>
    </li>
    <li>
      <StatisticData>Positive feedback:</StatisticData>
      <StatisticResults>{positivePercentage}%</StatisticResults>
    </li>
  </StatisticList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
