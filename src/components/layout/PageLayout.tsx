import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ColorTheme from '../../constants/color';
import RequiredChildrenComponent from '../../types/RequiredChildrenComponent';

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${ColorTheme.PRIMARY};
`;

const StyledSelection = styled.section`
  max-width: 375px;
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
