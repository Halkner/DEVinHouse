import { openModal } from "../Modal/Modal"


export const Header = () => {
    return(
        <header>
            <span className="open-modal"><p id="new-card-btn" onClick={() => openModal()}>Novo Card +</p></span>
            <div className="logo"><img src="./src/assets/logo.png" alt="Logo" /></div>
            <span className="open-stats"><a href="#footer"><p id="btn-stats">Estatísticas</p></a></span>
        </header>
    )
}