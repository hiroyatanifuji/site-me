import React from 'react';
import styled from 'styled-components';
import OptimizedImage from './OptimizedImage';

const Icon = styled(OptimizedImage)`
  border-radius: 50%;
  object-fit: cover;
`;

const CircleAvatar: React.FunctionComponent<{ src: string }> = ({ src }) => <Icon src={src} width={50} height={50} />;

export default CircleAvatar;
