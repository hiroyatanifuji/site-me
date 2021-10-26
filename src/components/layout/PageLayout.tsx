import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import RequiredChildrenComponent from '../../types/RequiredChildrenComponent';
import Footer from './Footer';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
`;

const StyledMain = styled.main`
  flex: 1;
  max-width: ${({ theme }) => theme.breakPoint.desktop}px;
  padding: 0 20px;
  margin: 0 auto;
`;

const PageLayout: RequiredChildrenComponent<{ title: string }> = ({ title, children }) => (
  <StyledDiv>
    <Head>
      <title>{title}</title>
    </Head>
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledDiv>
);

export default PageLayout;
