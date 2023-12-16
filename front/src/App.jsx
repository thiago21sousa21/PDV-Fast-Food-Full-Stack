import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kitchen from './pages/kitchen-page'
import Pickups from './pages/pickup-page'
import Orders from './pages/orders-page'
import { styled } from "styled-components";
import Header from './components/header/Header';
import productsContext from './contexts/products-context';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState(undefined)

  return (
    <productsContext.Provider value={{ products, setProducts }}>
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
    </productsContext.Provider>
  )
}

export default App;

const CsApp = styled.div`
  *{border: 1px solid}
  border: 1px solid;
  max-width: 1080px; 
  margin: 0 auto 0;
`;

