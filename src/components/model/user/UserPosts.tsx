import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../ui/text/SubTitle';
import PostListTile from '../../ui/tile/PostListTile';

export { LinkType } from '../../ui/tile/PostListTile';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

const StyledPostListTile = styled(PostListTile)`
  margin-bottom: 10px;
  @media ${({ theme }) => theme.media.tablet} {
    margin-right: 10px;
  }
`;

const UserPosts: React.FunctionComponent<{ data: (React.ComponentProps<typeof PostListTile> & { id: number })[] }> = ({
  data,
}) => (
  <StyledSection>
    <SubTitle title="Recent Posts" />
    <PostList>
      {data.map(({ id, type, href, thumbnailUrl, title }) => (
        <StyledPostListTile key={id} type={type} href={href} thumbnailUrl={thumbnailUrl} title={title} />
      ))}
    </PostList>
  </StyledSection>
);

export default UserPosts;
