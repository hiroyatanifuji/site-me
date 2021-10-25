import {css, DefaultTheme} from 'styled-components';
import pxToVw from '../utils/pxToVw';

const Color =  {
  PRIMARY: '#000000',
  DEFAULT_FONT: '#ffffff',
}

const Theme: DefaultTheme = {
  breakPoint: {
    phone: 320,
    tablet: 520,
    desktop: 960,
  },
  color: {
    primary: Color.PRIMARY,

    defaultFont: Color.DEFAULT_FONT,
  },

  text: {
    headline1: css`
      font-size: ${pxToVw(32)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline2: css`
      font-size: ${pxToVw(28)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline3: css`
      font-size: ${pxToVw(24)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline4: css`
      font-size: ${pxToVw(20)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline5: css`
      font-size: ${pxToVw(16)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    headline6: css`
      font-size: ${pxToVw(14)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,

    bodyText1: css`
      font-size: ${pxToVw(16)};
      color: ${Color.DEFAULT_FONT};
    `,
    bodyText2: css`
      font-size: ${pxToVw(14)};
      color: ${Color.DEFAULT_FONT};
    `,

    subTitle1: css`
      font-size: ${pxToVw(12)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
    subTitle2: css`
      font-size: ${pxToVw(10)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,

    button1: css`
      font-size: ${pxToVw(14)};
      font-weight: bold;
      color: ${Color.DEFAULT_FONT};
    `,
  },
} as const;

export default Theme