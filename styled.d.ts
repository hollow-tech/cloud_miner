import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    secondary: string;
    lightPrimary: string;
    primary: string;
    success: string;
    subtitle: string;
    text: string;
    grass: string;
    error: string;
    placeholderColor: string;
    surface: string;
    focused: string;
    white: string;

    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}
