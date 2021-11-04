import React from 'react';
import styled from 'styled-components';
import RequiredChildrenComponent from '../../types/RequiredChildrenComponent';
import ValueOf from '../../types/ValueOf';
import TypedLink, { TypedLinkProps } from './TypedLink';

export const LinkType = {
  NEXT_LINK: 'next',
  ANCHOR_LINK: 'anchor',
} as const;
type TLinkType = ValueOf<typeof LinkType>;

type BaseProps = { type: TLinkType; disabled?: boolean };

type NextLinkTypeProps = { type: typeof LinkType.NEXT_LINK } & TypedLinkProps & BaseProps;
type AnchorLinkTypeProps = { type: typeof LinkType.ANCHOR_LINK; href: string } & BaseProps;

type Props = NextLinkTypeProps | AnchorLinkTypeProps;

const isNextLinkType = (props: Props): props is NextLinkTypeProps => {
  return props.type === LinkType.NEXT_LINK;
};
const isAnchorLinkType = (props: Props): props is AnchorLinkTypeProps => {
  return props.type === LinkType.ANCHOR_LINK;
};

const StyledA = styled.a<{ disabled: boolean }>`
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};

  &:hover {
    opacity: 0.6;
  }
`;

const LinkContainer: RequiredChildrenComponent<Props> = props => (
  <>
    {isNextLinkType(props) &&
      (({ disabled, ...linkProps }) => (
        <TypedLink {...linkProps}>
          <StyledA disabled={disabled ?? false}>{props.children}</StyledA>
        </TypedLink>
      ))(props)}
    {isAnchorLinkType(props) && (
      <StyledA disabled={props.disabled ?? false} target="_blank" rel="noopener noreferrer" href={props.href}>
        {props.children}
      </StyledA>
    )}
  </>
);

export default LinkContainer;
