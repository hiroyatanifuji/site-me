import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import RequiredChildrenComponent from '../../types/RequiredChildrenComponent';

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

const StyledSelection = styled.section`
  max-width: ${({ theme }) => theme.breakPoint.desktop};
  margin: 0 auto;
`;

const PageLayout: RequiredChildrenComponent<{ title: string }> = ({ title, children }) => (
  <StyledDiv>
    <Head>
      <title>{title}</title>
    </Head>
    <StyledSelection>{children}</StyledSelection>
  </StyledDiv>
);

export default PageLayout;
