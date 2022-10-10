import { PaymentContainer, StyledForm } from "./styles"

export const OrderForm = () => {
    return(
        <StyledForm>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="cpf">CPF</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="address">Endereço</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="phone">Telefone</label>
                <input type="tel" />
            </div>

            <PaymentContainer>
                <p>Qual a forma de pagamento?</p>

                <select>
                    <option value="pix">PIX</option>
                    <option value="credit">Crédito</option>
                    <option value="debit">Débito</option>
                </select>
            </PaymentContainer>
        </StyledForm>
    )
}