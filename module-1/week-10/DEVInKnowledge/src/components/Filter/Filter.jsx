import { useAppContext } from "../../contexts/app-context"

export const Filter = () => {
    const {filterTips} = useAppContext();

    return(
        <div className="search-div">
            <input type="search" className="search-bar" placeholder="Digite o título do card..." onChange={e => filterTips(e.target.value)}/>
        </div>
    )
}