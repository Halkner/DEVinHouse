import {CreditCard} from '@phosphor-icons/react'
import { OPTIONS_PAYMENT } from '../../constants'

export const MyOrderCard = ({order}) => {
    return(
        <div className="my-order-card-container">
            <div className="my-order-card-header">
                <div className="my-order-card-header-left">
                    <h1>Pedido #{order.id}</h1>
                    <span>Em 13/02/2023 às 11:05</span>
                </div>
                <div className="my-order-card-header-right">
                    <span>Finalizado</span>
                </div>
            </div>
            <div className="my-order-card-body">
                <div className="delivery-way">
                    <div className="delivery-way-header">
                        <h2>Forma de entrega</h2>
                    </div>
                    
                    <div className="delivery-way-content">
                        <h3>Endereço de entrega</h3>

                        <p>{order.clientAddress.address}, {order.clientAddress.neighborhood}</p>
                        <p>{order.clientAddress.city} - {order.clientAddress.state}</p>
                    </div>
                </div>

                <div className="payment-way">
                    <div className="payment-way-header">
                        <h2>Forma de pagamento</h2>
                    </div>
                    
                    <div className="payment-way-content">
                        <CreditCard size={26} />
                        <p><b>{OPTIONS_PAYMENT.find(opt => opt.value === order.paymentType)?.label}</b></p>
                    </div>
                </div>

                <div className="order">
                    <div className="order-header">
                        <h2>Pedido</h2>
                    </div>
                    
                    <div className="order-content">
                        <div className="order-description">
                            <p><b>2x Sushi de salmão</b></p>
                            <p className="order-price">R$ 15,00</p>
                        </div>
                        <div className="order-description">
                            <p><b>2x Temaki</b></p>
                            <p className="order-price">R$ 15,00</p>
                        </div>
                        <div className="order-description">
                            <p><b>2x Nigiri</b></p>
                            <p className="order-price">R$ 15,00</p>
                        </div>
                    </div>

                    <hr />

                    <div className="full-order-price">
                        <div>
                            <p>Subtotal</p>
                            <p>R$ 45,00</p>
                        </div>
                        <div>
                            <p>Taxa de entrega</p>
                            <p>R$ 5,00</p>
                        </div>
                        <div>
                            <p><strong>Total</strong></p>
                            <p><strong>R$ 50,00</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}