import { OrderForm } from "../OrderForm/OrderForm";
import {useModal} from "../../contexts/ModalContext/useModal";
import { StyledBtnContainer, StyledMain } from "./styles";

export const MainContent = () => { 
    const {ModalIsOpen} = useModal();
    return(
        <>
            {ModalIsOpen ? <OrderForm/> : ""}
            <StyledMain>
                <StyledBtnContainer>
                    <button>Novo Pedido</button>
                </StyledBtnContainer>
            </StyledMain>
        </>
    )
}