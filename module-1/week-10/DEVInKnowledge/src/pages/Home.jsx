import React from "react"

export const Home = () => {
    return(
        <React.Fragment>
            <header>
                <span class="open-modal"><p id="new-card-btn">Novo Card +</p></span>
                <div class="logo"><img src="./src/assets/logo.png" alt="Logo" /></div>
                <span class="open-stats"><a href="#footer"><p id="btn-stats">Estatísticas</p></a></span>
            </header>

            <div className="modal-form">
                <div className="container-form-add-card">
                    <span className="close-modal">&times;</span>

                    <div className="pin-container"><img src="assets/pin.png" alt="alfinete"/></div>
                    <h1>Adicionar novo card</h1>
                    <form className="form-add-card">
                        <label for="titulo">Título</label>
                        <input type="text" name="titulo" id="titulo" minlength="8" maxlength="64" required />

                        <label for="lang-skill">Linguagem/Skill</label>
                        <input type="text" name="lang-skill" id="lang-skill" minlength="4" maxlength="16" required />

                        <label for="select-categoria">Categoria</label>
                        <select name="categoria" id="select-categoria" required>
                            <option value=""></option>
                            <option value="front-end">Front-End</option>
                            <option value="back-end">Back-End</option>
                            <option value="fullstack">FullStack</option>
                            <option value="soft">Comportamental/Soft</option>
                        </select>

                        <label for="descricao">Descrição</label>
                        <textarea name="descricao" id="descricao" minlength="32" maxlength="512" required></textarea>

                        <label for="video-url">Vídeo</label>
                        <input type="url" name="video-url" id="video-url" />
                        <div className="form-buttons-container">
                            <div className="form-add-card-button">
                                <button className="btn-salvar" id="btn-salvar">Salvar</button>
                                <button className="btn-limpar">Limpar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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