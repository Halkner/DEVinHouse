import { StyledOrderCard } from "./styles"

export const OrderCard = () => {
    return(
        <StyledOrderCard>
            <div className="person-info">
                <p className="name">Matheus Adriano Martins</p>
                <p className="phone">(48) 9 9152-5320</p>
                <p className="address">Rua Bertoldo Simão de Oliveira, 572</p>
            </div>

            <div className="payment">
                <p className="chosen-payment">Dinheiro</p>
                <p className="order-value">R$ 121,50</p>
            </div>
        </StyledOrderCard>
    )
}