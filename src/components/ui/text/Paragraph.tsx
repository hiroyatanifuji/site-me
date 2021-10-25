import React from 'react';
import styled from 'styled-components';
import ColorTheme from '../../../constants/color';
import FontSize from '../../../constants/font';

const Styled = styled.p`
  font-size: ${FontSize.PARAGRAPH}px;
  line-height: 1.6;
  color: ${ColorTheme.DEFAULT_FONT};
`;

const Paragraph: React.FunctionComponent = ({ children }) => <Styled>{children}</Styled>;

export default Paragraph;
