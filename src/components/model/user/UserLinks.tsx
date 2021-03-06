import React from 'react';
import styled from 'styled-components';
import StandardButton, { ButtonType } from '../../ui/button/StandardButton';
import SubTitle from '../../ui/text/SubTitle';

export { ButtonType } from '../../ui/button/StandardButton';

type StandardButtonProps = React.ComponentProps<typeof StandardButton>;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 10px;
  @media ${({ theme }) => theme.media.tablet} {
    margin-right: 10px;
  }
`;

const UserLinks: React.FunctionComponent<{
  data: (StandardButtonProps & { type: typeof ButtonType.LINK | typeof ButtonType.ANCHOR, id: number} )[];
}> = ({ data }) => (
  <StyledSection>
    <SubTitle title="Socials &amp; Links" />
    <ButtonsContainer>
      {data.map((props) => (
        <ButtonContainer key={props.id}>
          <StandardButton {...props}/>
        </ButtonContainer>
      ))}
    </ButtonsContainer>
  </StyledSection>
);

export default UserLinks;
