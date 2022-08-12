import './Footer.css'

export const Footer = () => {
    return(
    <footer>
        <div className='footer-container'>
            <ul className="footer-location">
                <li className='footer-title'>Localização</li>
                <hr />
                <li>Rodovia BR 101 nº km 211, 7235 - Distrito Industrial, São José - SC, 88104-800</li>
                <li><a href="https://www.google.com.br/maps/place/SENAI+São+José/@-27.619839,-48.6488992,17.83z/data=!4m13!1m7!3m6!1s0x952735e58cf842b1:0x1362caae746b3f6!2sAc.+Senai+-+Distrito+Industrial,+São+José+-+SC!3b1!8m2!3d-27.6197681!4d-48.6481126!3m4!1s0x952737bfeee48cf3:0xfc2bf869ade93f03!8m2!3d-27.61927!4d-48.647575"><strong>Ver no mapa</strong></a></li>
            </ul>
            <ul className="footer-hours">
                <li className='footer-title'>Horários</li>
                <hr />
                <li><strong>Segunda à Quinta:</strong> 18:30 - 00:00</li>
                <li><strong>Sexta e Sábado:</strong> 18:30 - 02:00</li>
                <li><strong>Domingo:</strong> 19:00 - 22:00</li>
            </ul>
            <ul className="footer-contact">
                <li className='footer-title'>Contato</li>
                <hr />
                <li><strong>Celular:</strong> (48) 9 9152-5320</li>
                <li><strong>E-mail:</strong> halkner77@hotmail.com</li>
            </ul>
        </div>
    </footer>
    );
}