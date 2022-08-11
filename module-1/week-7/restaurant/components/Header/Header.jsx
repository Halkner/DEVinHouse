import "./Header.css";

export const Header = () =>{
    return(
    <header>
        <ul>
            <li className="logo"><img src="./public/assets/logo.png" alt="Logo Restaurante" /></li>
            <li className="menu">Menu</li>
        </ul>
    </header>
    );
}