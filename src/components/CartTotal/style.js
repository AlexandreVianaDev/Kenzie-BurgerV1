import styled from "styled-components";

const StyledCartTotal = styled.div`
  border-top: 2px solid var(--color-grey-3);

  > div {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }

  > div > .body-600 {
    color: var(--color-grey-2);
  }

  button {
    width: 100%;
  }
`;

export default StyledCartTotal;
