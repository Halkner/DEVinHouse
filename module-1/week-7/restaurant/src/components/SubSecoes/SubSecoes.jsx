import { RenderizaCard } from "../RenderizaCard/RenderizaCard";

import './SubSecoes.css';

export const SubSecoes = ({produtos, subSecao}) =>{
    const subSecaoFiltradas = produtos.filter((prod) => prod.subSecao === subSecao);

    return(
        <div className='sub-secao'>
            <div>
                <h3>{subSecao}</h3>
                <hr/>
            </div>

            <RenderizaCard produtos={subSecaoFiltradas} />
        </div>
    )
}