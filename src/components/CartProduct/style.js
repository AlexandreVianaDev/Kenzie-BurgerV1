import styled from "styled-components";

const StyledCartProduct = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap-6);
    min-height: 80px;
    /* padding: 20px; */

    figure {
        background-color: var(--color-grey-3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-1);
    }

    figure > img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        padding: 5px;
    }
    .product__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--gap-6);
        min-height: 80px; 
        width: 70%;
    }

    .product__text {
        display: flex;
        flex-direction: column;
    }

    .product__control {
        display: flex;
        flex-direction: column;
        gap: var(--gap-6);
    }

    .product__control > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .product__control > div > button {
        width: 22px;
        height: 22px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .product__control > button {
        background-color: var(--color-grey-4);
        color: var(--color-grey-2);
        /* font-weight: var(--font-weight-3); */
    }

    @media screen and (min-width: 426px) {
        .product__info {
            width: 75%;
        }
    }

    @media screen and (min-width: 600px) {
        .product__info {
            width: 80%;
        }
    }
`

export default StyledCartProduct 