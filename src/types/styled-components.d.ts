import 'styled-components';

type Color = `#${string}` | `rgba(${number}, ${number}, ${number}, ${number})`;

type Media = `(min-width: ${number}px)`;

declare module 'styled-components' {
  export interface DefaultTheme {
    util: {
      pxToVw: (px: number, baseWidth?: number) => string;
    };
    breakPoint: {
      phone: number;
      tablet: number;
      desktop: number;
    };
    media: {
      tablet: Media;
      desktop: Media;
    },
    color: {
      primary: Color;
      defaultFont: Color;
      defaultBorderColor: Color;
    };
    text: {
      headline1: FlattenSimpleInterpolation;
      headline2: FlattenSimpleInterpolation;
      headline3: FlattenSimpleInterpolation;
      headline4: FlattenSimpleInterpolation;
      headline5: FlattenSimpleInterpolation;
      headline6: FlattenSimpleInterpolation;
      bodyText1: FlattenSimpleInterpolation;
      bodyText2: FlattenSimpleInterpolation;
      subTitle1: FlattenSimpleInterpolation;
      subTitle2: FlattenSimpleInterpolation;
      button1: FlattenSimpleInterpolation;
    };
  }
}
