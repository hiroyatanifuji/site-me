import React from 'react';
import styled from 'styled-components';

const Styled = styled.h2`
  ${({ theme }) => theme.text.headline4}
`;

const SubTitle: React.FunctionComponent<{ title: string }> = ({ title }) => <Styled>{title}</Styled>;

export default SubTitle;
