import { CardImage } from "./CardImage"
import './Card.css'

export const Card = (props) => {
    const valorFormatado = Number(props.valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    return (
        <div className="card">
            <CardImage src="../../assets/pizza.jpg" alt="Pizza" />

            <ul>
                <li className="nome">{props.nome}</li>
                <li>{props.descricao}</li>
                <li>{valorFormatado}</li>
                <li>{props.tempoDePreparo}</li>
            </ul>

        </div>
    )
}