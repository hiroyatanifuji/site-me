import React from 'react';
import styled from 'styled-components';
import TypedLink, { TypedLinkProps } from '../../functional/TypedLink';

export const ButtonType = {
  FORM_BUTTON: 'form',
  SUBMIT_BUTTON: 'submit',
  LINK: 'link',
  ANCHOR: 'anchor',
} as const;

type BaseProps = { label: string; disabled?: boolean; className?: string };

type FormButtonTypeProps = { type: typeof ButtonType.FORM_BUTTON; onClick: () => void } & BaseProps;
type SubmitButtonTypeProps = { type: typeof ButtonType.SUBMIT_BUTTON } & BaseProps;
type LinkTypeProps = { type: typeof ButtonType.LINK } & TypedLinkProps & BaseProps;
type AnchorTypeProps = { type: typeof ButtonType.ANCHOR; href: string } & BaseProps;

type ButtonProps = FormButtonTypeProps | SubmitButtonTypeProps | LinkTypeProps | AnchorTypeProps;

const StyledButton = styled.button<{ disabled: boolean }>`
  display: block;
  width: 230px;
  padding: 16px;
  ${({ theme }) => theme.text.button1}

  line-height: 1.4;
  text-align: center;
  text-decoration: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  background-color: ${({ theme }) => theme.color.primary};
  border: solid 1px ${({ theme }) => theme.color.defaultFont};
  border-radius: 4px;
  outline: none;
  opacity: ${props => (props.disabled ? 0.5 : 1.0)};

  &:hover {
    opacity: 0.6;
  }
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
      <StyledButton disabled={props.disabled ?? false} type="submit" className={props.className}>
        {props.label}
      </StyledButton>
    )}
    {isLinkType(props) &&
      (({ label, disabled = false, ...linkProps }: LinkTypeProps) => (
        <TypedLink {...linkProps}>
          <StyledA disabled={disabled} className={props.className}>
            {props.label}
          </StyledA>
        </TypedLink>
      ))(props)}
    {isAnchorType(props) && (
      <StyledA
        disabled={props.disabled ?? false}
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
        className={props.className}
      >
        {props.label}
      </StyledA>
    )}
  </>
);

export default StandardButton;
