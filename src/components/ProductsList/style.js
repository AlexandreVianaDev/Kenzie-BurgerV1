import styled from "styled-components";

const StyledProductList = styled.ul`
    display: flex;
    gap: var(--gap-1);
    padding: 16px 0;
    overflow-x: auto;

    @media screen and (min-width: 769px){
        flex-wrap: wrap;
        overflow-x: hidden;
        justify-content: center;
    }

    @media screen and (min-width: 1280px){

        justify-content: space-between;
    }
`

export default StyledProductList