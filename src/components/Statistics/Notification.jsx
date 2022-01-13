import React from 'react';
import { StatisticMessage } from './Statistics.styled';

const Notification = ({ message }) => (
  <StatisticMessage>{message}</StatisticMessage>
);

export default Notification;
