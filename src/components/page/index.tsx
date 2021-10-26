import React from 'react';
import styled from 'styled-components';
import { GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import PageLayout from '../layout/PageLayout';
import UserProfile from '../model/user/UserProfile';
import UserModel from '../../models/user';
import Config from '../../config';
import UserLinks from '../model/user/UserLinks';
import UserPosts from '../model/user/UserPosts';

type GetStaticPropsDataType = { user: UserModel.User | null };

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const NoUser: UserModel.User = {
  iconUrl: '',
  name: '',
  info: '',
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopPageComponent: React.FunctionComponent<Props> = ({ user }) => (
  <PageLayout title="Hiroya Tanifuji">
    <StyledDiv>
      <UserProfile user={user ?? NoUser} />
      <UserLinks />
      <UserPosts />
    </StyledDiv>
  </PageLayout>
);

export const getStaticProps = async (
  _: GetStaticPropsContext,
): Promise<GetStaticPropsResult<GetStaticPropsDataType>> => {
  const res = await fetch(`${Config.WEB_FRONT_URL}/api/user`, {
    mode: 'cors',
  });
  if (!res.ok || res.status !== 200) {
    return { props: { user: null } };
  } else {
    const user = await res.json();
    return { props: { user } };
  }
};

export default TopPageComponent;
