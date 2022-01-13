import styled from '@emotion/styled';

export const FeedbackButtons = styled.button`
  padding: 6px 22px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.03em;
  color: #ffffff;
  background: #14aaf5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    background-color: #4073ff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
