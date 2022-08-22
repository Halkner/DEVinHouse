import styles from './FiltroSecao.module.css'

export const FiltroSecao = ({secoes, onSelecionarSecao}) =>{
    return(
        <div className='filter-container'>
            <ul className='filter-list-sections'>
                {secoes.map((sec) => (
                    <li key={sec.id} onClick={() => {onSelecionarSecao}}>{sec.nome}</li>
                ))}
            </ul>
        </div>
    )
}