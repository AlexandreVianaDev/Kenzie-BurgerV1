import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-4);
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
  }

  @media screen and (min-width: 769px) {
    > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default StyledHeader;
