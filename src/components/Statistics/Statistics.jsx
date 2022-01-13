import React from 'react';
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

export default Statistics;
