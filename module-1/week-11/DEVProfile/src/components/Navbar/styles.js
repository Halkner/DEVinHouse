import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.headerBackground};

    .logo-container img{
        margin-left: 2em;
        width: 350px;
    }

    .switch-container{
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 2em;
    }

    .switch-container img{
        filter: ${({theme}) => theme.colors.invertValue};
        width: 16px;
        margin: 0 10px;
    }
`