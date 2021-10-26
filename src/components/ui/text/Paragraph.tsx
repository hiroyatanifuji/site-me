import React from 'react';
import styled from 'styled-components';

export enum TextAlign {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}

const Styled = styled.p<{ align: TextAlign }>`
  line-height: 1.8;
  text-align: ${({ align }) => align};
  white-space: pre-wrap;
  ${({ theme }) => theme.text.bodyText1}
`;

const Paragraph: React.FunctionComponent<{ align?: TextAlign; className?: string }> = ({
  align = TextAlign.LEFT,
  className,
  children,
}) => (
  <Styled align={align} className={className}>
    {children}
  </Styled>
);

export default Paragraph;
