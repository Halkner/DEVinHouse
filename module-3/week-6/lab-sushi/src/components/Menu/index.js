import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

import Input from '../Input'

const Menu = () => {

  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const [text, setText] = useState('')

  const handleChangeSearchInput = (e) => setText(e.target.value)

  return (

    <header className="menu">
      <div className="menu-content">
        <div className="logo-container">
          <img src="logo.png" alt="logo" onClick={() => navigate('/')} />
        </div>

        <Input
          value={text}
          onChange={handleChangeSearchInput}
          placeholder="O que deseja ?"
          name="text"
        />

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
