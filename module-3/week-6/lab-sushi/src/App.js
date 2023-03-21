import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CartProvider } from './contexts/CartContext';
import Menu from './components/Menu';

import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { ToastContainer } from 'react-toastify';
import { MenuProvider } from './contexts/MenuContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MenuProvider>
          <Menu />
          <AppRoutes />
          <ToastContainer />
        </MenuProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
