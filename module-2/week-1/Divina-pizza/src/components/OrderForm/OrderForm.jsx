import { PaymentContainer, StyledForm, ModalOverlay, StyledFormContainer, StyledButtonContainer, ObsContainer} from "./styles";
import { useModal } from '../../contexts/ModalContext/useModal';
import { useForm } from 'react-hook-form';

export const OrderForm = () => {

    const {SetModalIsOpen} = useModal();
    const {register, handleSubmit} = useForm();

    const formSubmit = data => console.log(data);

    return(
        <ModalOverlay>
            <StyledFormContainer>
                <span onClick={() => SetModalIsOpen(false)}> X </span>
                <StyledForm onSubmit={handleSubmit(formSubmit)}>
                    <div>
                        <input type="text" placeholder="Digite seu nome..." {...register("name")}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Digite seu CPF..." {...register("cpf")}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Digite seu endereço..." {...register("address")}/>
                    </div>
                    <div>
                        <input type="tel" placeholder="Digite seu telefone..." {...register("phone")}/>
                    </div>

                    <PaymentContainer>
                        <p>Qual a forma de pagamento?</p>

                        <select {...register("payment")}>
                            <option value="pix">PIX</option>
                            <option value="credit">Crédito</option>
                            <option value="debit">Débito</option>
                        </select>
                    </PaymentContainer>

                    <ObsContainer>
                        <textarea cols="30" rows="10" placeholder="Deixe uma observação para o seu pedido..."></textarea>
                    </ObsContainer>
                    <StyledButtonContainer>
                        <button type="submit">Confirmar</button>
                    </StyledButtonContainer>
                </StyledForm>
            </StyledFormContainer>
        </ModalOverlay>
    )
}