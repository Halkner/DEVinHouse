import styled from 'styled-components';

export const StyledMain = styled.main`
    grid-column: 2/2;
`

export const StyledBtnContainer = styled.div`
    width: 100%;
    height: 20%;
    box-sizing: border-box;
    display: flex;
    align-items: end;
    gap: 1rem;

    button{
        border: none;
        width: 120px;
        height: 40px;
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
        transition: all 0.1s;
        margin-bottom: 10px;
    }

    button:hover{
        color:  rgb(255, 255, 255);
    }

    .btn-new-order{
        background-color: rgb(0, 255, 0);
    }

    .btn-show-pizzas{
        background-color: rgba(255, 195, 0);
    }
`

export const StyledAllOrdersContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 80%;

`