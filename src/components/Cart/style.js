import styled from "styled-components";

const StyledCart = styled.div`
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
    }

    @media screen and (min-width: 769px){
        /* width: 50%; */
        padding: 16px 0;
        max-width: 350px;
    }
`

export default StyledCart