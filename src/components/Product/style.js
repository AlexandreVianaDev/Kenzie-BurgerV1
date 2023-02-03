import styled from "styled-components";

const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid var(--color-grey-3);
  border-radius: var(--radius-2);
  min-width: 225px;
  max-width: 225px;
  min-height: 375px;
  max-height: 375px;

  :hover {
    transition: 0.5s;
    scale: 1.1;
  }

  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-4);
  }

  figure > img {
    width: 175px;
    height: 150px;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--gap-6);
    padding: 16px;
  }

  button {
    width: fit-content;
  }
  @media screen and (min-width: 769px) {
    min-width: 200px;
    max-width: 200px;
    min-height: 375px;
    max-height: 375px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 245px;
    max-width: 245px;
  }
`;

export default StyledProduct;
