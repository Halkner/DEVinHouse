import "./Header.css";

export const Header = () =>{
    return(
    <header>
        <ul className="menu-container">
            <li className="logo"><img src="./assets/logo.png" alt="Logo Restaurante" /></li>
            <li className="menu"><a href="#">Cardápio</a></li>
        </ul>
    </header>
    );
}