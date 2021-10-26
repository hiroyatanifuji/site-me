import React from 'react';
import styled from 'styled-components';
import { GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import PageLayout from '../layout/PageLayout';
import UserProfile from '../model/user/UserProfile';
import UserModel from '../../models/user';
// import Config from '../../config';
import UserLinks, { ButtonType } from '../model/user/UserLinks';
import UserPosts, { LinkType } from '../model/user/UserPosts';
import UserWorks from '../model/user/UserWorks';

type GetStaticPropsDataType = { user: UserModel.User | null };

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const NoUser: UserModel.User = {
  iconUrl: '',
  name: '',
  info: '',
};

const LinksData: React.ComponentProps<typeof UserLinks>['data'] = [
  {
    id: 1,
    label: 'Github',
    type: ButtonType.ANCHOR,
    href: 'https://github.com/hiroyatanifuji',
  },
  {
    id: 2,
    label: 'Twitter',
    type: ButtonType.ANCHOR,
    href: 'https://twitter.com/HiroIot',
  },
  {
    id: 3,
    label: 'Facebook',
    type: ButtonType.ANCHOR,
    href: 'https://facebook.com/hiroyatanifuji',
  },
  {
    id: 4,
    label: 'Blog',
    type: ButtonType.ANCHOR,
    href: 'https://hirotanifuji.hatenablog.com/',
  },
  {
    id: 5,
    label: 'Resume',
    type: ButtonType.ANCHOR,
    href: 'https://www.resume.id/hiroya_tanifuji',
  },
];

const PostsData: React.ComponentProps<typeof UserPosts>['data'] = [
  {
    id: 1,
    type: LinkType.ANCHOR_LINK,
    href: 'https://hirotanifuji.hatenablog.com/entry/2021/09/27/085513',
    thumbnailUrl: '/images/thumbnails/hatena.png',
    title: '2021年10月版 CodemagicでFlutterアプリのCI/CDを構築する【iOS編】',
  },
  {
    id: 2,
    type: LinkType.ANCHOR_LINK,
    href: 'https://hirotanifuji.hatenablog.com/entry/2021/09/27/135553',
    thumbnailUrl: '/images/thumbnails/hatena.png',
    title: '2021年10月版 CodemagicでFlutterアプリのCI/CDを構築する【Android編】',
  },
  {
    id: 3,
    type: LinkType.ANCHOR_LINK,
    href: 'https://hirotanifuji.hatenablog.com/entry/2021/10/03/141312',
    thumbnailUrl: '/images/thumbnails/hatena.png',
    title: 'FlutterアプリにCognitoのソーシャルサインインを実装する【Google編】',
  },
  {
    id: 4,
    type: LinkType.ANCHOR_LINK,
    href: 'https://hirotanifuji.hatenablog.com/entry/2021/09/23/152616',
    thumbnailUrl: '/images/thumbnails/hatena.png',
    title:
      "Flutter2 の List.firstWhere で The return type 'Null' isn't a XXX, as required by the closure's context に...",
  },
];

const WorksData: React.ComponentProps<typeof UserWorks>['data'] = [
  {
    id: 1,
    type: LinkType.ANCHOR_LINK,
    href: 'https://github.com/hiroyatanifuji/site-me',
    thumbnailUrl: '/images/thumbnails/github.png',
    title: 'このサイトのリポジトリ。React / Next.js / Typescript で実装。',
  },
  {
    id: 2,
    type: LinkType.ANCHOR_LINK,
    href: 'https://github.com/hiroyatanifuji/amplify-flutter-social-signin',
    thumbnailUrl: '/images/thumbnails/github.png',
    title: 'Flutter でソーシャルサインインを実装したリポジトリ。Amplify で実装。',
  },
];

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopPageComponent: React.FunctionComponent<Props> = ({ user }) => (
  <PageLayout title="Hiroya Tanifuji">
    <StyledDiv>
      <UserProfile user={user ?? NoUser} />
      <UserLinks data={LinksData} />
      <UserPosts data={PostsData} />
      <UserWorks data={WorksData} />
    </StyledDiv>
  </PageLayout>
);

export const getStaticProps = async (
  _: GetStaticPropsContext,
): Promise<GetStaticPropsResult<GetStaticPropsDataType>> => {
  return { props: { user: null } };
  // const res = await fetch(`${Config.WEB_FRONT_URL}/api/user`, {
  //   mode: 'cors',
  // });
  // if (!res.ok || res.status !== 200) {
  //   return { props: { user: null } };
  // } else {
  //   const user = await res.json();
  //   return { props: { user } };
  // }
};

export default TopPageComponent;
