import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { MenuContext } from "../../contexts/MenuContext";

import Input from '../Input'

const Menu = () => {

  const { cart } = useContext(CartContext)
  const navigate = useNavigate()
  const { filterCards } = useContext(MenuContext);

  const renderInput = () => {
    if(window.location.pathname === '/'){
      return(
        <Input
          onChange={e => filterCards(e.target.value)}
          placeholder="O que deseja ?"
          name="text"
        />
      )
    }else{
      return null
    }
  }

  return (

    <header className="menu">
      <div className="menu-content">
        <div className="logo-container">
          <img src="logo.png" alt="logo" onClick={() => navigate('/')} />
        </div>

        {renderInput()}

        <ul>
          <li onClick={() => navigate('/contact-us')}>
            Fale Conosco
          </li>

          <li onClick={() => navigate('/my-orders')}>
            Meus Pedidos
          </li>
          <li className="cart-nav-container" onClick={() => navigate('/cart')} data-testid="cart-link">
            <FaCartPlus color="#000" />
            Carrinho - {cart.length} items
          </li>
        </ul>
      </div>
    </header>

  );
};

export default Menu;
