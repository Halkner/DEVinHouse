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
    height: 90%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
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

export const StyledForm = styled.form`
        width: 60%;
        display: flex;
        flex-direction: column;
    
    input{
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        border: none;
        border-bottom: 1px solid;
        margin-top: 2em;
        font-size: 16px;
        border-image: linear-gradient(90deg, rgba(0,140,69,1) 0%, rgba(244,249,255,1) 50%, rgba(205,33,42,1) 100%) 1;

        &:focus{
            outline: none;
        }
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
        height: 40px;
        box-sizing: border-box;
        text-align: center;
    }
`

export const StyledButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2em;

    button{
        border: none;
        width: 120px;
        height: 40px;
        background-color: #4CAF50;
        color: white;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
        }
    }
`