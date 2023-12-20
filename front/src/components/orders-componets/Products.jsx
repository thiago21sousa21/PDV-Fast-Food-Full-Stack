import styled from "styled-components";
import { useContext } from "react";
import productsContext from "../../contexts/products-context";
import Product from "./Product";
import { Oval } from 'react-loader-spinner'


const Products = () => {
    const { products } = useContext(productsContext)
    if (!products) return <CsLoader>
        <Oval />
    </CsLoader>
    const { combos, desserts, drinks } = products;

    return (
        <CsProducts>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
            <div className="container">
                <div className="subContainer">
                    {
                        combos.map((info, idx) => <Product key={idx} info={info} />)
                    }
                </div>
                <div className="subContainer">
                    {
                        desserts.map((info, idx) => <Product key={idx} info={info} />)
                    }
                </div>
                <div className="subContainer">
                    {
                        drinks.map((info, idx) => <Product key={idx} info={info} />)
                    }
                </div>
            </div>
        </CsProducts>
    );
}

export default Products;

const CsProducts = styled.div`
   .container{
    display: flex;
    flex-direction: column;

    .subContainer{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

   }
   margin: 20px 0;
 
`;
const CsLoader = styled.div`
    display: flex;
    justify-content: center;
`