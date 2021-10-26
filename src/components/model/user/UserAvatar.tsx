import React from 'react';
import styled from 'styled-components';
import CircleAvatar from '../../ui/image/CircleAvatar';

const Styled = styled.div`
  padding: 20px 0;
`;

const UserAvatar: React.FunctionComponent<{ src: string }> = ({ src }) => (
  <Styled>
    <CircleAvatar src={src} />
  </Styled>
);

export default UserAvatar;
