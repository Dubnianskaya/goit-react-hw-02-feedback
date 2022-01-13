import React from 'react';
import { Card, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <Card>
    <Title>{title}</Title>
    {children}
  </Card>
);

export default Section;
