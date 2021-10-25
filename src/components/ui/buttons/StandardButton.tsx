import React from 'react';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import FontSize from '../../../constants/font';
import ColorTheme from '../../../constants/color';

export enum ButtonType {
  FORM_BUTTON,
  SUBMIT_BUTTON,
  LINK,
  ANCHOR,
}

type BaseProps = { label: string; disabled?: boolean };

type FormButtonTypeProps = { type: ButtonType.FORM_BUTTON; onClick: () => void } & BaseProps;
type SubmitButtonTypeProps = { type: ButtonType.SUBMIT_BUTTON } & BaseProps;
type LinkTypeProps = { type: ButtonType.LINK } & LinkProps & BaseProps;
type AnchorTypeProps = { type: ButtonType.ANCHOR; href: string } & BaseProps;

type ButtonProps = FormButtonTypeProps | SubmitButtonTypeProps | LinkTypeProps | AnchorTypeProps;

const StyledButton = styled.button<{ disabled: boolean }>`
  display: block;
  width: 250px;
  padding: 16px;
  font-size: ${FontSize.BUTTON_LABEL}px;
  font-weight: 500;
  line-height: 1.4;
  color: ${ColorTheme.DEFAULT_FONT};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  background-color: ${ColorTheme.PRIMARY};
  border: solid 1px ${ColorTheme.DEFAULT_FONT};
  border-radius: 4px;
  outline: none;
  opacity: 1;
  opacity: ${props => (props.disabled ? 0.5 : 1.0)};
`;

const StyledA = styled(StyledButton.withComponent('a'))`
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
`;

const isFormButtonType = (props: ButtonProps): props is FormButtonTypeProps => props.type === ButtonType.FORM_BUTTON;
const isSubmitButtonType = (props: ButtonProps): props is FormButtonTypeProps =>
  props.type === ButtonType.SUBMIT_BUTTON;
const isLinkType = (props: ButtonProps): props is LinkTypeProps => props.type === ButtonType.LINK;
const isAnchorType = (props: ButtonProps): props is AnchorTypeProps => props.type === ButtonType.ANCHOR;

const ButtonTypeButton: React.FunctionComponent<FormButtonTypeProps> = ({ onClick, disabled, label }) => {
  const safeOnClick = React.useCallback<React.MouseEventHandler>(
    e => {
      e.stopPropagation();
      onClick();
    },
    [onClick],
  );

  return (
    <StyledButton onClick={safeOnClick} disabled={disabled ?? false} type="button">
      {label}
    </StyledButton>
  );
};

const StandardButton: React.FunctionComponent<ButtonProps> = props => (
  <>
    {isFormButtonType(props) && <ButtonTypeButton {...props} />}
    {isSubmitButtonType(props) && (
      <StyledButton disabled={props.disabled ?? false} type="submit">
        {props.label}
      </StyledButton>
    )}
    {isLinkType(props) &&
      (({ label, disabled = false, ...linkProps }: LinkTypeProps) => (
        <Link {...linkProps}>
          <StyledA disabled={disabled}>{props.label}</StyledA>
        </Link>
      ))(props)}
    {isAnchorType(props) && (
      <StyledA disabled={props.disabled ?? false} target="_blank" rel="noopener noreferrer" href={props.href}>
        {props.label}
      </StyledA>
    )}
  </>
);

export default StandardButton;
