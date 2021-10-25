import React from 'react';
import styled from 'styled-components';
import ColorTheme from '../../../constants/color';
import FontSize from '../../../constants/font';

const Styled = styled.h2`
  font-size: ${FontSize.TITLE}px;
  color: ${ColorTheme.DEFAULT_FONT};
`;

const StandardTitle: React.FunctionComponent<{ title: string }> = ({ title }) => <Styled>{title}</Styled>;

export default StandardTitle;
