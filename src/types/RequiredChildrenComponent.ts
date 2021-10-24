import React, { ReactNode } from 'react';

type RequiredChildrenComponent<Props> = React.FunctionComponent<{ children: ReactNode } & Props>;

export default RequiredChildrenComponent;
