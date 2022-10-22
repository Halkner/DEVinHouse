import { PaymentContainer, StyledForm, ModalOverlay, StyledFormContainer, StyledButtonContainer } from "./styles";
import { useModal } from '../../contexts/ModalContext/useModal';

export const OrderForm = () => {

    const {SetModalIsOpen} = useModal();

    return(
        <ModalOverlay>
            <StyledFormContainer>
                <span onClick={() => SetModalIsOpen(false)}> X </span>
                <StyledForm>
                    <div>
                        <input type="text" placeholder="Digite seu nome..."/>
                    </div>
                    <div>
                        <input type="text" placeholder="Digite seu CPF..."/>
                    </div>
                    <div>
                        <input type="text" placeholder="Digite seu endereço..."/>
                    </div>
                    <div>
                        <input type="tel" placeholder="Digite seu telefone..."/>
                    </div>

                    <PaymentContainer>
                        <p>Qual a forma de pagamento?</p>

                        <select>
                            <option value="pix">PIX</option>
                            <option value="credit">Crédito</option>
                            <option value="debit">Débito</option>
                        </select>
                    </PaymentContainer>
                    <StyledButtonContainer>
                        <button>Confirmar</button>
                    </StyledButtonContainer>
                </StyledForm>
            </StyledFormContainer>
        </ModalOverlay>
    )
}