import {useForm} from 'react-hook-form';

export const Sidebar = () => {

    const { register, handleSubmit, formState: {erros} } = useForm()

    const handleCreateTip = (data) => {
        return console.log(data);
    }

    return(
        <div className="modal-form">
            <div className="container-form-add-card">
                <span className="close-modal">&times;</span>

                <div className="pin-container"><img src="../src/assets/pin.png" alt="alfinete"/></div>
                <h1>Adicionar novo card</h1>
                <form className="form-add-card" onSubmit={handleSubmit(handleCreateTip)}>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" id="titulo" minLength="8" maxLength="64" {...register("titulo")} required />

                    <label htmlFor="lang-skill">Linguagem/Skill</label>
                    <input type="text" name="lang-skill" id="lang-skill" minLength="4" maxLength="16" {...register("lang-skill")}  required />

                    <label htmlFor="select-categoria">Categoria</label>
                    <select name="categoria" id="select-categoria" {...register("categoria")}  required>
                        <option value=""></option>
                        <option value="front-end">Front-End</option>
                        <option value="back-end">Back-End</option>
                        <option value="fullstack">FullStack</option>
                        <option value="soft">Comportamental/Soft</option>
                    </select>

                    <label htmlFor="descricao">Descrição</label>
                    <textarea name="descricao" id="descricao" minLength="32" maxLength="512" {...register("descricao")} required></textarea>

                    <label htmlFor="video-url">Vídeo</label>
                    <input type="url" name="video-url" id="video-url" {...register("video-url")} />
                    <div className="form-buttons-container">
                        <div className="form-add-card-button">
                            <button className="btn-salvar" id="btn-salvar" type="submit">Salvar</button>
                            <button className="btn-limpar">Limpar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}