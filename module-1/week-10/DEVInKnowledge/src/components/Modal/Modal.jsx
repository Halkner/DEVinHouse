import {useForm} from 'react-hook-form';
import { useAppContext } from '../../contexts/app-context';
import styles from './Modal.module.css'

export const Modal = () => {

    const { register, handleSubmit } = useForm()

    const {modalIsOpen, closeModal, createTip} = useAppContext()

    const handleCreateTip = (data) => {
        createTip(data);
    }
    
    return(
        <div className={`${modalIsOpen ? styles.openedModalForm : styles.modalForm}`}>
            <div className={styles.containerFormAddCard}>
                <span className="closeModal" onClick={() => closeModal()}>&times;</span>

                <div className={styles.pinContainer}><img src="../src/assets/pin.png" alt="alfinete"/></div>
                <h1>Adicionar novo card</h1>

                <form className={styles.formAddCard} onSubmit={handleSubmit(handleCreateTip)}>
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" minLength="8" maxLength="64" {...register("title")} required />

                    <label htmlFor="langSkill">Linguagem/Skill</label>
                    <input type="text" name="langSkill" minLength="4" maxLength="16" {...register("langSkill")}  required />

                    <label htmlFor="category">Categoria</label>
                    <select name="category" {...register("category")}  required>
                        <option value=""></option>
                        <option value="front-end">Front-End</option>
                        <option value="back-end">Back-End</option>
                        <option value="fullstack">Full Stack</option>
                        <option value="soft">Comportamental/Soft</option>
                    </select>

                    <label htmlFor="description">Descrição</label>
                    <textarea name="description" minLength="32" maxLength="512" {...register("description")} required></textarea>

                    <label htmlFor="videoUrl">Vídeo</label>
                    <input type="url" name="videoUrl" {...register("videoUrl")} />
                    
                    <div className={styles.formButtonsContainer}>
                        <div className={styles.formAddCardButton}>
                            <button className={styles.btnSalvar} type="submit">Salvar</button>
                            <button className={styles.btnLimpar}>Limpar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}