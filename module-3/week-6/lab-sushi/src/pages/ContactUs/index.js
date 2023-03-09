import {Clock, EnvelopeSimple, Phone, WhatsappLogo} from '@phosphor-icons/react'

export const ContactUs = () => {
    return (
        <div className="contact-main-container">
            <div className="contact-container">
                <div className="contact-info-container">
                    <h1>Fale Conosco</h1>
                    <h2>Informações de contato</h2>

                    <div className="contact-info">
                        <div>
                            <EnvelopeSimple size={24} />
                            <div className="email-info">
                                <p>E-mail</p>
                                <span>falecom@clubebom.com.br</span>
                            </div>

                        </div>
                        <div>
                            <Phone size={24} />
                            <div className="phone-info">
                                <p>Telefone</p>
                                <span>(48) 3333-4444</span>
                            </div>
                        </div>
                        <div>
                            <WhatsappLogo size={24} />
                            <div className="wpp-info">
                                <p>WhatsApp</p>
                                <span>(48) 99999-9999</span>
                            </div>
                        </div>
                        <div>
                            <Clock size={24} />
                            <div className="hours-info">
                                <p>Horário de atendimento</p>
                                <span>Segunda a Sexta - 08:00 às 18:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h1>Envie sua mensagem para nós</h1>
                    <form>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome"/>
                        </div>

                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email"/>
                        </div>

                        <div>
                            <label htmlFor="telefone">Telefone (opcional)</label>
                            <input type="tel"/>
                        </div>

                        <div>
                            <label htmlFor="text">Sua mensagem</label>
                            <textarea />
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}