import styled from "styled-components";

export const StyledOrderCard = styled.div`
    width: 100%;
    background-color: white;
    height: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 18px;
    border: 1px inset rgba(0, 0, 0, 0.07);


    .person-info{
        margin-left: 2rem;
    }

    .name{
        font-weight: bold;
    }

    .payment{
        display: flex;
        align-items: center;
        height: 100%;
        gap: 3rem;
        margin-right: 2rem;
        font-size: 16px;
    }
    
    .order-value{
        font-weight: bold;
    }

    .chosen-payment{
        color: #4CAF50;
    }
`