import styled from "styled-components";
import { useContext, useState } from "react";
import productsContext from "../../contexts/products-context";
import Product from "./Product";
import { Oval } from 'react-loader-spinner'
import DescriptionProduct from "./DescriptionProduct";


const Products = () => {
    const { products } = useContext(productsContext)
    if (!products) {
        return (
            <CsLoader>
                <Oval />
            </CsLoader>)
    }

    const [displayDescription, setDisplayDescription] = useState(undefined);
    const getDescriptionProduct = ({ category, position }) => {
        const product = products[category][position];
        console.log(product)
        setDisplayDescription(product)
    }

    const { combos, desserts, drinks } = products;
    return (
        <CsProducts>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
            <div className="container">
                {displayDescription && <DescriptionProduct setDisplayDescription={setDisplayDescription} />}
                <div className="subContainer">
                    {
                        combos.map((info, idx) => (
                            <Product
                                key={idx}
                                info={info}
                                setDisplayDescription={setDisplayDescription}
                                category={'combos'}
                                position={idx}
                                getDescriptionProduct={getDescriptionProduct}
                            />
                        ))
                    }
                </div>
                <div className="subContainer">
                    {
                        desserts.map((info, idx) => (
                            <Product
                                key={idx}
                                info={info}
                                setDisplayDescription={setDisplayDescription}
                                category={'desserts'}
                                position={idx}
                                getDescriptionProduct={getDescriptionProduct}
                            />
                        ))
                    }
                </div>
                <div className="subContainer">
                    {
                        drinks.map((info, idx) => (
                            <Product
                                key={idx}
                                info={info}
                                setDisplayDescription={setDisplayDescription}
                                category={'drinks'}
                                position={idx}
                                getDescriptionProduct={getDescriptionProduct}
                            />
                        ))
                    }
                </div>
            </div>
        </CsProducts>
    );
}

export default Products;

const CsProducts = styled.div`
    font-family: roboto;

    h2{
        font-size: 30px;
    }

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