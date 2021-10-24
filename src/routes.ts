import {LinkProps} from 'next/link';

type RouteKeys = 'TOP' | 'BLOG' | 'POST';

declare const key: unique symbol;
export type TypedLinkProps = LinkProps & { [key]: never };

const Routes: {[K in RouteKeys]: (...args: Array<any>) => TypedLinkProps}  = {
  TOP: () => ({href: '/'} as TypedLinkProps),
  BLOG: () => ({href: '/blog'} as TypedLinkProps),
  POST: (id: string) => ({href: `/blog/${id}`} as TypedLinkProps),
};

export default Routes;