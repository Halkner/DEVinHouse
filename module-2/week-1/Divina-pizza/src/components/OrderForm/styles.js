import styled from 'styled-components';

export const ModalOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const StyledFormContainer = styled.div`
    width: 30%;
    height: 80%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    position: relative;

    span{
        font-size: 20px;
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
    }

    span:hover{
        color: red;
    }
`

export const StyledForm = styled.div`
        margin-top: 4em;
        width: 60%;
        display: flex;
        flex-direction: column;
    
    label{
        display: block;
        margin-bottom: 3px;
        margin-top: 10px;
    }
    input{
        box-sizing: border-box;
        width: 100%;
    }
`

export const PaymentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    p{
        margin-bottom: 10px;
    }

    select{
        width: 30%;
        box-sizing: border-box;
        text-align: center;
    }
`