import React from 'react';
import styled from 'styled-components';
import ColorConstant from '../../../constants/color';
import FontSize from '../../../constants/font';

const Styled = styled.p`
  font-size: ${FontSize.PARAGRAPH}px;
  line-height: 1.6;
  color: ${ColorConstant.DEFAULT_FONT_COLOR};
`;

const Paragraph: React.FunctionComponent = ({ children }) => <Styled>{children}</Styled>;

export default Paragraph;
