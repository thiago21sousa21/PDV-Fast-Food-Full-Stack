import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kitchen from './pages/kitchen-page'
import Pickups from './pages/pickup-page'
import Orders from './pages/orders-page'
import { styled } from "styled-components";
import Header from './components/header/Header';
import { CartProvider } from './contexts/CartContext';
import { ProductsProvider } from './contexts/ProductsContext';


function App() {

  return (
    <ProductsProvider>
      <CartProvider>
        <CsApp>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/cozinha' element={<Kitchen />} />
              <Route path='/' element={<Orders />} />
              <Route path='/retirada' element={<Pickups />} />
            </Routes>
          </BrowserRouter>
        </CsApp>
      </CartProvider>
    </ProductsProvider>
  )
}

export default App;

const CsApp = styled.div`
  /* *{border: 1px solid}
  border: 1px solid; */
  //max-width: 1080px; 
  margin: 0 auto 0;
`;

