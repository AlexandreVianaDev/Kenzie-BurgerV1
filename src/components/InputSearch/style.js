import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid var(--color-grey-3);
    border-radius: var(--radius-2);
    padding: 8px 0;
  }

  input {
    width: 60%;
    padding-left: 16px;
  }

  input::placeholder {
    color: var(--color-grey-3);
  }

  button {
    margin-right: 8px;
  }
`;

export default StyledForm;
