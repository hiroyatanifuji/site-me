import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Path } from '../../paths';
import RequiredChildrenComponent from '../../types/RequiredChildrenComponent';

export type TypedLinkProps = Omit<LinkProps, 'href'> & { href: Path };

const TypedLink: RequiredChildrenComponent<TypedLinkProps> = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
);

export default TypedLink;
