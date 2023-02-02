import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --color-primary-1: #27AE60;
  --color-primary-2: #93D7AF;
  --color-secondary-1: #EB5757;
  --color-grey-1: #333333;
  --color-grey-2: #828282;
  --color-grey-3: #E0E0E0;
  --color-grey-4: #F5F5F5;

  --color-white: #FFFFFF;

  --color-negative: #E60000;
  --color-warning: #FFCD07;
  --color-sucess: #168821;
  --color-information: #155BCB;

  --bg-color: #FFFFFF;
  --bg-button: #0d1114;

  --font-title-1: 1.625rem; /* 26 pixels */
  --font-title-2: 1.375rem; /* 22 pixels */
  --font-title-3: 1.125rem; /* 18 pixels */
  --font-title-4: 0.875rem; /* 14 pixels */
  --font-text-1: 1rem; /* 16 pixels */
  --font-text-2: 0.875rem; /* 14 pixels */
  --font-text-3: 0.75rem; /* 12 pixels */

  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 400;

  --line-heigth-1: 2.125rem; /* 34 pixels */
  --line-heigth-2:1.5rem; /* 24 pixels */
  --line-heigth-3: 1rem; /* 16 pixels */

  --radius-1: 5px;
  --radius-2: 8px;
  --radius-100: 100%;

  --gap-1: 2rem; /* 32 pixels */
  --gap-2: 1.75rem; /* 28 pixels */
  --gap-3: 1.5rem; /*  24 pixels */
  --gap-4: 1.25rem; /* 20 pixels */
  --gap-5: 1rem; /* 16 pixels */
  --gap-6: 0.875rem; /* 14 pixels */


  --container-1: 1200px;

  --font-family-1: 'Inter', sans-serif;
}

body {
    font-family: var(--font-family-1);
}

img {
  max-width: 100%;
}

.container {
  width: 90%;
  max-width: var(--container-1);
  margin: 0 auto;
}

.heading-1 {
  font-size: var(--font-title-1);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-1);
}

.heading-2 {
  font-size: var(--font-title-2);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-2);
}

.heading-3 {
  font-size: var(--font-title-3);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-2);
}

.heading-4 {
  font-size: var(--font-title-4);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-2);
}

input, textarea, .headline {
    color: var(--color-grey-1);
  font-size: var(--font-text-1);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-2);
}

body, .body {
  color: var(--color-grey-1);
  font-size: var(--font-text-2);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-2);
}

button, .body-600 {
  font-size: var(--font-text-2);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-2);
  border-radius: var(--radius-2);
}

.caption {
  font-size: var(--font-text-3);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-3);
}

.price {
    color: var(--color-primary-1);
    font-weight: var(--font-weight-2);
}

.button-green {
    color: var(--color-white);
    background-color: var(--color-primary-1);
}

.button-green:hover {
    background-color: var(--color-primary-2);
}

.button-grey {
    color: var(--color-grey-2);
    background-color: var(--color-grey-3);
}

.button-grey:hover {
    color: var(--color-grey-3);
    background-color: var(--color-grey-2);
}

.button-default {
    padding: 16px;
}

.button-medium {
    padding: 8px 16px;
}

.text-grey {
    color: var(--color-grey-2);  
}

`;

export default GlobalStyle;
