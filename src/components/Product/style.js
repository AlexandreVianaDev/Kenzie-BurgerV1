import styled from "styled-components";

const StyledProduct = styled.li`
    border: 2px solid var(--color-grey-3);
    border-radius: var(--radius-2);
    min-width: 225px;

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
`

export default StyledProduct