import styled from "styled-components";

export const CardStyle = styled.div`
    width: 20%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.cardColor};
`