import styled from "styled-components";
import { useContext, useState } from "react";
import Product from "./Product";
import { Oval } from 'react-loader-spinner'
import DescriptionProduct from "./DescriptionProduct";
import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";


const Products = () => {
    const { products } = useContext(ProductsContext)
    const [displayDescription, setDisplayDescription] = useState(undefined);
    const { setOrderCart } = useContext(CartContext)

    if (!products) {
        return (
            <CsLoader>
                <Oval />
            </CsLoader>)
    }

    const getDescriptionProduct = ({ category, position }) => {
        const product = products[category][position];
        const { name, id, value } = product;
        setOrderCart({ order: { id, value, name, amount: 1, totalValue: value } })
        setDisplayDescription(product)
    }
    return (
        <CsProducts>
            <h2>Produtos</h2>
            <p>Selecione um produto para adicionar ao seu pedido</p>
            <div className="container">
                {
                    displayDescription && (
                        <DescriptionProduct
                            setDisplayDescription={setDisplayDescription}
                            displayDescription={displayDescription}
                        />
                    )
                }
                {
                    Object.keys(products).map((cat, index) => {
                        if (cat === 'dishes') return <div key={index}></div>;
                        return (
                            <div className="subContainer " key={index}>
                                {
                                    products[cat].map((info, idx) => (
                                        <Product
                                            key={idx}
                                            info={info}
                                            setDisplayDescription={setDisplayDescription}
                                            category={cat}
                                            position={idx}
                                            getDescriptionProduct={getDescriptionProduct}
                                        />
                                    ))
                                }
                            </div>
                        )
                    })
                }
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
        .marginLeft{
            //margin-left: 20px;
        }
        .marginLeft:nth-child(4n +1){
            margin-left: 0;
        }


        margin: 10px 0;
        //border: 1px solid;
    }

   }
   margin: 20px 0;
 
`;
const CsLoader = styled.div`
    display: flex;
    justify-content: center;
`