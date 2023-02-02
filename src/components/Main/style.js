import styled from "styled-components";

const StyledMain = styled.main`
    > div {
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 769px){
        > div {
            flex-direction: row;
            justify-content: space-between;
            gap: 32px;
        }

        > div > .section__cards {
            width: 65%;
        }

        > div > .section__cart {
            /* width: 40%; */
        }
    }
`

export default StyledMain