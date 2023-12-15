import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kitchen from './pages/kitchen-page'
import Pickups from './pages/pickup-page'
import Orders from './pages/orders-page'
import { styled } from "styled-components";
import Header from './components/header/Header';


function App() {

  return (
    <CsApp>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/cozinha' element={<Kitchen />} />
          <Route path='/pedidos' element={<Orders />} />
          <Route path='/retirada' element={<Pickups />} />
        </Routes>
      </BrowserRouter>
    </CsApp>
  )
}

export default App;

const CsApp = styled.div`
  *{border: 1px solid}
  border: 1px solid
`;

