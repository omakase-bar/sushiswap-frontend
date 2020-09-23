import { DefaultTheme, css } from "styled-components";
import { black, green, grey, red, white } from "./colors";

// TODO: Need to fix/merge
// added to keep type consistency with /exchange
const darkMode = false;
const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280,
};

const mediaWidthTemplates: {
  [width in keyof typeof MEDIA_WIDTHS]: typeof css;
} = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

const theme: DefaultTheme = {
  borderRadius: 12,
  breakpoint: {
    mobile: 400,
  },
  color: {
    black,
    grey,
    primary: {
      light: red[200],
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    white,
  },
  siteWidth: 1200,
  spacing: {
    1: 4,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 48,
    7: 64,
  },
  topBarSize: 72,

  grids: {
    sm: 8,
    md: 12,
    lg: 24,
  },
  // added to keep type consistency with /exchange
  white,
  black,

  // text
  text1: darkMode ? "#FFFFFF" : "#000000",
  text2: darkMode ? "#C3C5CB" : "#565A69",
  text3: darkMode ? "#6C7284" : "#9a7c64",
  text4: darkMode ? "#565A69" : "#C3C5CB",
  text5: darkMode ? "#2C2F36" : "#e6ddd6",

  // backgrounds / greys
  bg1: darkMode ? "#212429" : "#FFFFFF",
  bg2: darkMode ? "#2C2F36" : "#fff7f2",
  bg3: darkMode ? "#40444F" : "#e6ddd6",
  bg4: darkMode ? "#565A69" : "#CED0D9",
  bg5: darkMode ? "#6C7284" : "#9a7c64",

  //specialty colors
  modalBG: darkMode ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",
  advancedBG: darkMode ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)",

  //primary colors
  primary1: darkMode ? "#2172E5" : "#d03800", //"#805e49",
  primary2: darkMode ? "#3680E7" : "#DD6B20", //"#88715f",
  primary3: darkMode ? "#4D8FEA" : "#ED8936", //"#aa9585",
  primary4: darkMode ? "#376bad70" : "#F6AD55", //"#e2d6cf",
  primary5: darkMode ? "#153d6f70" : "#FBD38D", //"f0e9e7",

  // color text
  primaryText1: darkMode ? "#6da8ff" : "#d03800", //"#805e49",

  // secondary colors
  secondary1: darkMode ? "#2172E5" : "#d03800", //"#805e49",
  secondary2: darkMode ? "#17000b26" : "#F6AD55", //"#e2d6cf",
  secondary3: darkMode ? "#17000b26" : "#FBD38D", //"#f0e9e7",

  // other
  red1: "#FF6871",
  red2: "#F82D3A",
  green1: "#27AE60",
  yellow1: "#FFE270",
  yellow2: "#F3841E",
  //shadows
  shadow1: "#2F80ED",
  // media queries
  mediaWidth: mediaWidthTemplates,
  // css snippets
  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `,
};

export default theme;
