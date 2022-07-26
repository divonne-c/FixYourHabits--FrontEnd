import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    //////////////// Colors /////////////////

    // White colors
    --color-white: #FFFEFE;
    --color-white-background: #F5F5F5;
    --color-white-input: #F8F1E8;

    // Orange colors
    --color-orange-light: #FDEACF;
    --color-orange-active: #FDE9CF;
    --color-orange: #FEA165;
    --color-orange-button: #FE9B65;
    --color-orange-salmon: #FDC79D;

    // Text Colors
    --color-text-orange-dark: #F48014;
    --color-text-orange-light: #FEA165;
    --color-text-grey: #6B6162;

    // Habit Colors
    --color-habit-sport: #C2ECE7;
    --color-habit-health: #ecc2c2;
    --color-habit-food: #C2ECC2;
    --color-habit-finance: #E8ECC2;
    --color-habit-business: #cbf3b1;
    --color-habit-hobby: #C2CDEC;
    --color-habit-mind: #D4C2EC;
    --color-habit-study: #FDCA9D;
    --color-habit-home: #fd9d9d;
    --color-habit-family: #9ddbfd;

    // Other Colors
    --color-background-modal: rgba(0, 0, 0, 0.38);
    --color-success: #98bd98;
    --color-success-background: #e5efe5;
    --color-error: #e54141;
    --color-error-background: #f5e8e8;
    --color-pink: #FBBCA8;


    //////////////// Padding /////////////////
    --padding-xxs: 4px;
    --padding-xs: 8px;
    --padding-s: 16px;
    --padding-sm: 25px;
    --padding-m: 32px;
    --padding-l: 64px;
    --padding-xl: 128px;
    --padding-xxl: 256px;
    --padding-xxxl: 512px;

    //////////////// Margin /////////////////
    --margin-negative: -2em;
    --margin-xxs: 0.25em;
    --margin-xs: 0.5em;
    --margin-s: 1em;
    --margin-m: 2em;
    --margin-l: 3em;
    --margin-xl: 4em;
    --margin-xxl: 5em;
    --margin-xxxl: 6em;

    //////////////// Gaps /////////////////
    --gap-xxs: 0.25em;
    --gap-xs: 0.5em;
    --gap-s: 1em;
    --gap-sm: 1.5em;
    --gap-m: 2em;
    --gap-l: 3em;
    --gap-xl: 4em;
    --gap-xxl: 5em;
    --gap-xxxl: 6em;

    //////////////// Font-family /////////////////
    --font-family: 'Inria Sans', sans-serif;

    //////////////// Font Sizes /////////////////
    --font-xxxs: 0.5rem;
    --font-xxs: 0.6rem;
    --font-xs: 0.75rem;
    --font-s: 1rem;
    --font-sm: 1.2rem;
    --font-m: 2rem;
    --font-l: 3rem;
    --font-xl: 4rem;
    --font-xxl: 5rem;
    --font-xxxl: 6rem;

    //////////////// Font Weight /////////////////
    --font-weigt-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    //////////////// Line Height /////////////////
    --line-height-s: 1;
    --line-height-m: 1.5;
    --line-height-l: 2;

    //////////////// Border Radius /////////////////
    --border-radius-xs: 0.1em;
    --border-radius-s: 0.5em;
    --border-radius-m: 1em;
    --border-radius-l: 2em;
    --border-radius-xl: 4em;
    --border-radius-xxl: 6em;

    //////////////// Border Radius /////////////////
    --border-width-xxs: 1px;
    --border-width-xs: 2px;
    --border-width-s: 4px;
    --border-width-m: 6px;
    --border-width-l: 8px;
    --border-width-xl: 10px;
    --border-width-xxl: 12px;
    --border-width-xxxl: 14px;

    //////////////// Heights /////////////////
    --height-50vh: 50vh;
    --height-70vh: 70vh;
    --height-100vh: 100vh;
    --height-100: 100%;
    --height-habit: 120px;
    --height-reward: 150px;

    //////////////// Widths /////////////////
    --width-35vw: 35vw;
    --width-icon: 40px;
    --width-100vw: 100vw;
    --width-100: 100%;
    --width-habit: 120px;
    --width-reward: 150px;
    --width-modal-mobile: 90vw;

    //////////////// Layout /////////////////
    --layout-width-navigation-m: 100px;
    --layout-width-navigation-l: 200px;
    --layout-width-navigation-xl: 250px;

    --layout-margin-content-m: 100px;
    --layout-margin-content-l: 200px;


    //////////////// Shadows /////////////////
    --shadow-color: 0deg 0% 60%;
    --shadow-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.1),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.1),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.1);
    --shadow-large: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.1),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.1),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.1),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.1),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.1),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.1),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.1);


  }


  //////////////// Css Reset /////////////////
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    font-size: var(--font-size-s);
    line-height: var(--line-height-m);
    background-color: var(--color-white-background);
    color: var(--color-text-grey);
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }

  button:hover {
    cursor: pointer;
  }

  //////////////// fonts /////////////////
  h1, h2, h3, h4 {
    font-weight: var(--font-weight-normal);
  }


`;

export default GlobalStyles;
