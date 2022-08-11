import "./Header.css";

export const Header = () =>{
    return(
    <header>
        <ul>
            <li className="logo"><img src="./public/assets/logo.png" alt="Logo Restaurante" /></li>
            <li className="menu"><a href="#">Cardápio</a></li>
        </ul>
    </header>
    );
}