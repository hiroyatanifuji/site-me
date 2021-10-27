import { css, DefaultTheme } from 'styled-components';

const Color = {
  PRIMARY: '#000000',
  DEFAULT_FONT: '#ffffff',
  DEFAULT_BORDER: '#303d3a',
} as const;

const BreakPoint = {
  PHONE: 320,
  TABLET: 520,
  DESKTOP: 960,
};

const pxToVw = (px: number, baseWidth = BreakPoint.DESKTOP) => `${(px / baseWidth) * 100}vw`;

const Theme: DefaultTheme = {
  util: {
    pxToVw,
  },
  breakPoint: {
    phone: BreakPoint.PHONE,
    tablet: BreakPoint.TABLET,
    desktop: BreakPoint.DESKTOP,
  },
  media: {
    tablet: `(min-width: ${BreakPoint.TABLET}px)`,
    desktop: `(min-width: ${BreakPoint.DESKTOP}px)`,
  },
  color: {
    primary: Color.PRIMARY,
    defaultFont: Color.DEFAULT_FONT,
    defaultBorderColor: Color.DEFAULT_BORDER,
  },
  text: {
    headline1: css`
      font-size: 32px;
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline2: css`
      font-size: 28px;
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline3: css`
      font-size: 24px;
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline4: css`
      font-size: 20px;
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline5: css`
      font-size: 16px;
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline6: css`
      font-size: 14px;
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,

    bodyText1: css`
      font-size: 16px;
      color: ${Color.DEFAULT_FONT};
    `,
    bodyText2: css`
      font-size: 14px;
      color: ${Color.DEFAULT_FONT};
    `,

    subTitle1: css`
      font-size: 13px;
      color: ${Color.DEFAULT_FONT};
    `,
    subTitle2: css`
      font-size: 10px;
      color: ${Color.DEFAULT_FONT};
    `,

    button1: css`
      font-size: 13px;
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
  },
} as const;

export default Theme;
