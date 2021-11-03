import React from 'react';
import styled from 'styled-components';
import ValueOf from '../../../types/ValueOf';

export const TextAlign = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
} as const;
type TTextAlign = ValueOf<typeof TextAlign>;

const Styled = styled.p<{ align: TTextAlign }>`
  line-height: 1.8;
  text-align: ${({ align }) => align};
  white-space: pre-wrap;
  ${({ theme }) => theme.text.bodyText1}
`;

const Paragraph: React.FunctionComponent<{ align?: TTextAlign; className?: string }> = ({
  align = TextAlign.LEFT,
  className,
  children,
}) => (
  <Styled align={align} className={className}>
    {children}
  </Styled>
);

export default Paragraph;
