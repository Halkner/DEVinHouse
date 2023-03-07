import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import { ContactUs } from '../pages/ContactUs';
import Details from '../pages/Details';

import Home from '../pages/Home';
import Order from '../pages/Order';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<Order />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default AppRoutes;