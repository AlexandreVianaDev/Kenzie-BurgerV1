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

  --line-heigth-1: 1.625rem; /* 26 pixels */
  --line-heigth-2: 1.375rem; /* 22 pixels */
  --line-heigth-3: 1.125rem; /* 18 pixels */
  --line-heigth-4: 1rem; /* 16 pixels */
  --line-heigth-5: 0.875rem; /* 14 pixels */
  --line-heigth-6: 0.75rem; /* 12 pixels */

  --radius-1: 2px;
  --radius-2: 4px;
  --radius-3: 8px;
  --radius-4: 16px;
  --radius-5: 32px;
  --radius-100: 100%;

  --gap-1: 2rem; /* 32 pixels */
  --gap-2: 1.75rem; /* 28 pixels */
  --gap-3: 1.5rem; /*  24 pixels */
  --gap-4: 1.25rem; /* 20 pixels */
  --gap-5: 1rem; /* 16 pixels */


  --container-1: 1200px;

  --font-family-1: 'Inter', sans-serif;
}

img {
  max-width: 100%;
}

.container {
  max-width: var(--container-1);
  margin: 0 auto;
}

body, button, input, textarea {
  font-family: var(--font-family-1);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-4);
}

.title-1 {
  font-size: var(--font-title-1);
  font-weight: var(--font-weight-1);
  line-height: var(--line-heigth-1);
}

.title-2 {
  font-size: var(--font-title-2);
  font-weight: var(--font-weight-2);
  line-height: var(--line-heigth-2);
}

.text-1 {
  font-size: var(--font-text-1);
  font-weight: var(--font-weight-3);
  line-height: var(--line-heigth-4);
}


.text-2 {
  font-size: var(--font-text-2);
  font-weight: var(--font-weight-4);
  line-height: var(--line-heigth-4);
}

`;

export default GlobalStyle;
