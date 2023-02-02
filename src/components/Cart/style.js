import styled from "styled-components";

const StyledCart = styled.div`
  width: 100%;

  > h2 {
    background-color: var(--color-primary-1);
    border-radius: 5px 5px 0 0;
    color: var(--color-white);
    padding: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--gap-6);
    padding: 16px 4px;
    background-color: var(--color-grey-4);
  }
  .cart--empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-grey-4);
    padding: 64px 0;
  }

  @media screen and (min-width: 769px) {
    /* width: 50%; */
    padding: 16px 0;
    min-width: 250px;
    max-width: 350px;
  }
`;

export default StyledCart;
