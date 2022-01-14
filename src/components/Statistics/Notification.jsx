import React from 'react';
import PropTypes from 'prop-types';
import { StatisticMessage } from './Statistics.styled';

const Notification = ({ message }) => (
  <StatisticMessage>{message}</StatisticMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
