import React from 'react';
import styled from 'styled-components';
import ColorConstant from '../../../constants/color';
import FontSize from '../../../constants/font';

const Styled = styled.h2`
  font-size: ${FontSize.TITLE}px;
  color: ${ColorConstant.DEFAULT_FONT_COLOR};
`;

const StandardTitle: React.FunctionComponent<{ title: string }> = ({ title }) => <Styled>{title}</Styled>;

export default StandardTitle;
