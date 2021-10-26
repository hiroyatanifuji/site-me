import styled from 'styled-components';
import React from 'react';

const StyledFooter = styled.footer`
  width: 100%;
  margin: 80px 0 40px;
`;

const StyledSpan = styled.span`
  display: block;
  ${({ theme }) => theme.text.subTitle1};

  text-align: center;
`;

const Footer: React.FunctionComponent = () => (
  <StyledFooter>
    <StyledSpan>Copyright © Hiroya Tanifuji 2021.</StyledSpan>
  </StyledFooter>
);

export default Footer;
