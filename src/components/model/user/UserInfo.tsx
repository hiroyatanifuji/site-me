import React from 'react';
import styled from 'styled-components';
import Paragraph, { TextAlign } from '../../ui/text/Paragraph';

const Styled = styled.div`
  padding: 10px 0;
`;

const UserInfo: React.FunctionComponent = ({ children }) => (
  <Styled>
    <Paragraph align={TextAlign.CENTER}>{children}</Paragraph>
  </Styled>
);

export default UserInfo;
