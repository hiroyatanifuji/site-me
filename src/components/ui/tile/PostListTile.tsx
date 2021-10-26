import React from 'react';
import styled from 'styled-components';
import LinkContainer from '../../functional/LinkContainer';
import OptimizedImage from '../image/OptimizedImage';
import Paragraph from '../text/Paragraph';

export { LinkType } from '../../functional/LinkContainer';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 240px;
  height: 280px;
  border: solid 2px ${({ theme }) => theme.color.defaultBorderColor};
  border-radius: 4px;
`;

const StyledDiv = styled.div`
  width: 240px;
  height: 150px;
  padding: 10px;
`;

type LinkContainerProps = React.ComponentProps<typeof LinkContainer>;

type Props = Omit<LinkContainerProps, 'children'> & { thumbnailUrl: string; title: string; className?: string };

const PostListTile: React.FunctionComponent<Props> = props => (
  <LinkContainer {...(props as LinkContainerProps)}>
    <StyledSection className={props.className}>
      <OptimizedImage src={props.thumbnailUrl} width={240} height={130} />
      <StyledDiv>
        <Paragraph>{props.title}</Paragraph>
      </StyledDiv>
    </StyledSection>
  </LinkContainer>
);

export default PostListTile;
