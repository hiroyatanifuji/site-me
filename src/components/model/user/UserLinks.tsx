import React from 'react';
import styled from 'styled-components';
import StandardButton, { ButtonType } from '../../ui/button/StandardButton';
import SubTitle from '../../ui/text/SubTitle';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const UserLink: React.FunctionComponent = () => (
  <StyledSection>
    <SubTitle title="Links" />
    <StyledDiv>
      <StandardButton type={ButtonType.ANCHOR} label="Github" href="https://github.com/hiroyatanifuji" />
      <StandardButton type={ButtonType.ANCHOR} label="Twitter" href="https://twitter.com/HiroIot" />
      <StandardButton type={ButtonType.ANCHOR} label="Facebook" href="https://facebook.com/hiroyatanifuji" />
      <StandardButton type={ButtonType.ANCHOR} label="Resume" href="https://www.resume.id/hiroya_tanifuji" />
    </StyledDiv>
  </StyledSection>
);

export default UserLink;
