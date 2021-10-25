import React from 'react';
import styled from 'styled-components';

const Styled = styled.p`
  line-height: 1.6;
  white-space: pre-wrap;
  ${({ theme }) => theme.text.bodyText2}
`;

const Paragraph: React.FunctionComponent = ({ children }) => <Styled>{children}</Styled>;

export default Paragraph;
