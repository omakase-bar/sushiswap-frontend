// import original module declaration
import "styled-components";
import { black, green, grey, red, white } from "./colors";

// TODO: Need to fix or remove

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: number;
    breakpoint: {
      mobile: number;
    };
    color: {
      black;
      grey;
      primary: {
        light: string;
        main: string;
      };
      secondary: {
        main: string;
      };
      white;
    };
    siteWidth: number;
    spacing: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
    };
    topBarSize: number;
    // added to keep type consistency with /exchange
    grids: {
      sm: number;
      md: number;
      lg: number;
    };
    //shadows
    shadow1: string;
    // media queries
    mediaWidth: string;
    // css snippets
    flexColumnNoWrap: string;
    flexRowNoWrap: string;
  }
}
