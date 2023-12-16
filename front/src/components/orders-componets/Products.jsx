import styled from "styled-components";
import { useContext } from "react";
import productsContext from "../../contexts/products-context";
import Product from "./Product";

const Products = () => {
    const { products } = useContext(productsContext)
    //if (!products) return <></>;

    const combos = [1, 1, 1, 1];
    const acompanhamentos = [1, 1, 1, 1];
    const sobremesas = [1, 1, 1, 1];

    const data = {
        combos,
        acompanhamentos,
        sobremesas,
    }

    return (
        <CsProducts>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
            <div className="container">
                <div className="subContainer">
                    {
                        combos.map((numb, idx) => <Product key={idx} data={numb} />)
                    }
                </div>
                <div className="subContainer">
                    {
                        acompanhamentos.map((numb, idx) => <Product key={idx} data={numb} />)
                    }
                </div>
                <div className="subContainer">
                    {
                        sobremesas.map((numb, idx) => <Product key={idx} data={numb} />)
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
`