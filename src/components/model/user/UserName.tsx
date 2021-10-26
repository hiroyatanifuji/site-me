import React from 'react';
import styled from 'styled-components';
import StandardTitle from '../../ui/text/StandardTitle';

const Styled = styled.div`
  padding: 10px 0;
`;

const UserName: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <Styled>
    <StandardTitle title={name} />
  </Styled>
);

export default UserName;
