import React from 'react';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import RequiredChildrenComponent from '../../types/RequiredChildrenComponent';

export enum LinkType {
  NEXT_LINK,
  ANCHOR_LINK,
}

type BaseProps = { type: LinkType; disabled?: boolean };

type NextLinkTypeProps = { type: LinkType.NEXT_LINK } & LinkProps & BaseProps;
type AnchorLinkTypeProps = { type: LinkType.ANCHOR_LINK; href: string } & BaseProps;

type Props = NextLinkTypeProps | AnchorLinkTypeProps;

const isNextLinkType = (props: Props): props is NextLinkTypeProps => {
  return props.type === LinkType.NEXT_LINK;
};
const isAnchorLinkType = (props: Props): props is AnchorLinkTypeProps => {
  return props.type === LinkType.ANCHOR_LINK;
};

const StyledA = styled.a<{ disabled: boolean }>`
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
`;

const LinkContainer: RequiredChildrenComponent<Props> = props => (
  <>
    {isNextLinkType(props) &&
      (({ disabled, ...linkProps }) => (
        <Link {...linkProps}>
          <StyledA disabled={disabled ?? false}>{props.children}</StyledA>
        </Link>
      ))(props)}
    {isAnchorLinkType(props) && (
      <StyledA disabled={props.disabled ?? false} target="_blank" rel="noopener noreferrer" href={props.href}>
        {props.children}
      </StyledA>
    )}
  </>
);

export default LinkContainer;
