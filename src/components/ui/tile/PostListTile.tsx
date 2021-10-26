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
  width: 200px;
  height: 240px;
  border: solid 1px ${({ theme }) => theme.color.defaultBorderColor};
  border-radius: 4px;
`;

const StyledDiv = styled.div`
  padding: 8px 8px 0 8px;
`;

type LinkContainerProps = React.ComponentProps<typeof LinkContainer>;

type Props = Omit<LinkContainerProps, 'children'> & { thumbnailUrl: string; title: string };

const PostListTile: React.FunctionComponent<Props> = props => (
  <LinkContainer {...(props as LinkContainerProps)}>
    <StyledSection>
      <OptimizedImage src={props.thumbnailUrl} width={200} height={100} />
      <StyledDiv>
        <Paragraph>{props.title}</Paragraph>
      </StyledDiv>
    </StyledSection>
  </LinkContainer>
);

export default PostListTile;
