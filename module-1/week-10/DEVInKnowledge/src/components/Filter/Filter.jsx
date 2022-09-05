export const Filter = () => {
    return(
        <div className="search-div">
            <input type="search" className="search-bar" placeholder="Digite o título do card..." />
            <button className="search-btn"><img src="./src/assets/lupa.png" alt="Search button" /></button>
        </div>
    )
}