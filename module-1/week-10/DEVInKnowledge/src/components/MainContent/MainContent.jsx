import React from "react"

export const MainContent = () => {
    return(
        <React.Fragment>
            <header>
                <span class="open-modal"><p id="new-card-btn">Novo Card +</p></span>
                <div class="logo"><img src="./src/assets/logo.png" alt="Logo" /></div>
                <span class="open-stats"><a href="#footer"><p id="btn-stats">Estatísticas</p></a></span>
            </header>

            <div className="modal-card">
                <div className="modal-card-content">
                    <span className="close-modal" id="close-modal-card">&times;</span>
                    <h2 id="modal-titulo"></h2>
                    <p id="modal-skill"></p>
                    <p id="modal-categoria"></p>
                    <p id="modal-descricao"></p>
                </div>
            </div>
            <div className="search-div">
                <input type="search" className="search-bar" placeholder="Digite o título do card..." />
                <button className="search-btn"><img src="./src/assets/lupa.png" alt="Search button" /></button>
            </div>
            <div className="cards-container">
                
            </div>
        </React.Fragment>
    )
}