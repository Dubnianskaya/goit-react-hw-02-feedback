import React from 'react';
import PropTypes from 'prop-types';
import { Card, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <Card>
    <Title>{title}</Title>
    {children}
  </Card>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
