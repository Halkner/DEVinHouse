import styled from 'styled-components';

export const StyledForm = styled.main`
        margin-top: 4em;
        width: 40%;
        height: 100%;
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