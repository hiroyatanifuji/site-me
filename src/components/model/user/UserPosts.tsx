import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../ui/text/SubTitle';
import PostListTile, { LinkType } from '../../ui/tile/PostListTile';

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

const UserPosts: React.FunctionComponent = () => (
  <StyledSection>
    <SubTitle title="Posts" />
    <StyledDiv>
      <PostListTile
        type={LinkType.ANCHOR_LINK}
        href="https://github.com/hiroyatanifuji"
        thumbnailUrl="https://d3bpwnzencusk5.cloudfront.net/assets/assets/images/portfolio/user_works/github-7328012bb82cb4e681dc37a68d4dfc43a9b9e43194a74a831ed2c5bee264fb8b.png"
        title="2021年10月版 CodemagicでFlutterアプリのCI/CDを構築する【iOS編】 - Hiroのブログ"
      />
      <PostListTile
        type={LinkType.ANCHOR_LINK}
        href="https://github.com/hiroyatanifuji"
        thumbnailUrl="https://d3bpwnzencusk5.cloudfront.net/assets/assets/images/portfolio/user_works/github-7328012bb82cb4e681dc37a68d4dfc43a9b9e43194a74a831ed2c5bee264fb8b.png"
        title="2021年10月版 CodemagicでFlutterアプリのCI/CDを構築する【Android編】 - Hiroのブログ"
      />
      <PostListTile
        type={LinkType.ANCHOR_LINK}
        href="https://github.com/hiroyatanifuji"
        thumbnailUrl="https://d3bpwnzencusk5.cloudfront.net/assets/assets/images/portfolio/user_works/github-7328012bb82cb4e681dc37a68d4dfc43a9b9e43194a74a831ed2c5bee264fb8b.png"
        title="FlutterアプリにCognitoのソーシャルサインインを実装する【Google編】 - Hiroのブログ"
      />
      <PostListTile
        type={LinkType.ANCHOR_LINK}
        href="https://github.com/hiroyatanifuji"
        thumbnailUrl="https://d3bpwnzencusk5.cloudfront.net/assets/assets/images/portfolio/user_works/github-7328012bb82cb4e681dc37a68d4dfc43a9b9e43194a74a831ed2c5bee264fb8b.png"
        title="FlutterアプリにCognitoのソーシャルサインインを実装する【Google編】 - Hiroのブログ"
      />
      <PostListTile
        type={LinkType.ANCHOR_LINK}
        href="https://github.com/hiroyatanifuji"
        thumbnailUrl="https://d3bpwnzencusk5.cloudfront.net/assets/assets/images/portfolio/user_works/github-7328012bb82cb4e681dc37a68d4dfc43a9b9e43194a74a831ed2c5bee264fb8b.png"
        title="2021年10月版 CodemagicでFlutterアプリのCI/CDを構築する【Android編】 - Hiroのブログ"
      />
      <PostListTile
        type={LinkType.ANCHOR_LINK}
        href="https://github.com/hiroyatanifuji"
        thumbnailUrl="https://d3bpwnzencusk5.cloudfront.net/assets/assets/images/portfolio/user_works/github-7328012bb82cb4e681dc37a68d4dfc43a9b9e43194a74a831ed2c5bee264fb8b.png"
        title="2021年10月版 CodemagicでFlutterアプリのCI/CDを構築する【Android編】 - Hiroのブログ"
      />
    </StyledDiv>
  </StyledSection>
);

export default UserPosts;
