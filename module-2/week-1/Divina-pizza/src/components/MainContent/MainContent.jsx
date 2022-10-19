import { OrderForm } from "../OrderForm/OrderForm";
import {useModal} from "../../contexts/ModalContext/useModal";
import { StyledBtnContainer, StyledMain, StyledAllOrdersContainer } from "./styles";
import { OrderCard } from "../OrderCard/OrderCard";

export const MainContent = () => { 
    const {ModalIsOpen, SetModalIsOpen} = useModal();
    return(
        <>
            {ModalIsOpen ? <OrderForm/> : ""}
            <StyledMain>
                <StyledBtnContainer>
                    <div>
                        <button className="btn-new-order" onClick={SetModalIsOpen}>Novo Pedido</button>
                    </div>
                    <div>
                        <button className="btn-show-pizzas">Mostrar Pizzas</button>
                    </div>
                </StyledBtnContainer>
                <StyledAllOrdersContainer>
                    <OrderCard/>
                </StyledAllOrdersContainer>
            </StyledMain>
        </>
    )
}