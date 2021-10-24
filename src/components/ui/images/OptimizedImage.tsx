import React, { ComponentProps } from 'react';
import Image from 'next/image';

const OptimizedImage: React.FunctionComponent<ComponentProps<typeof Image>> = props => <Image {...props} />;

export default OptimizedImage;
