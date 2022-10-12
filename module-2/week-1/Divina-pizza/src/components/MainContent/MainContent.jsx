import { OrderForm } from "../OrderForm/OrderForm";
import {useModal} from "../../contexts/ModalContext/useModal";
import { StyledMain } from "./styles";

export const MainContent = () => { 
    const {ModalIsOpen} = useModal();
    return(
        <>
            {ModalIsOpen ? <OrderForm/> : ""}
            <StyledMain>

                <button></button>
                
            </StyledMain>
        </>
    )
}