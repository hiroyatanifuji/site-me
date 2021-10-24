import React from 'react';
import styled from 'styled-components';
import UserModel from '../../../models/user';
import UserAvatar from './UserAvatar';
import UserName from './UserName';
import UserInfo from './UserInfo';

const Styled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const UserProfile: React.FunctionComponent<{ user: UserModel.User }> = ({ user }) => (
  <Styled>
    <UserAvatar src={user.iconUrl} />
    <UserName name={user.name} />
    <UserInfo>{user.info}</UserInfo>
  </Styled>
);

export default UserProfile;