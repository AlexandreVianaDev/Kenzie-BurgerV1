import styled from "styled-components";

const StyledProductList = styled.ul`
  display: flex;
  gap: var(--gap-1);
  padding: 16px 0;
  overflow-x: auto;

  .search__warning {
    color: var(--color-negative);
    padding: 32px 0;
  }

  @media screen and (min-width: 769px) {
    flex-wrap: wrap;
    overflow-x: hidden;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    gap: var(--gap-4);
  }
`;

export default StyledProductList;
