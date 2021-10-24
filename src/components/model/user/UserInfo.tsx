import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../ui/text/Paragraph';

const Styled = styled.div`
  padding: 10px;
`;

const UserInfo: React.FunctionComponent = ({ children }) => (
  <Styled>
    <Paragraph>{children}</Paragraph>
  </Styled>
);

export default UserInfo;
