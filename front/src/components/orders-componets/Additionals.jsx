import styled from "styled-components";
import UnitAdditional from "./UnitAdditional";
import { useContext } from "react";
import productsContext from "../../contexts/products-context";

const Addictionais = ({ categoryId }) => {
    const { products } = useContext(productsContext);


    return (
        <CsAddictionais>
            <h1>Adicionais</h1>
            <h2>Selecione os ingredientes que você quer adicionar a mais no seu lanche.</h2>

            {products.dishes.map((dishse, idx) => <UnitAdditional key={idx} info={dishse} />)}

        </CsAddictionais>
    )
}

export default Addictionais;

const CsAddictionais = styled.div`
    width: 100%;
    height: 300px;
    overflow-y: auto;
    //border: 1px solid;
    /* *{border: 1px solid;} */

    margin-top: 40px;

    h1{
        font-size: 20px;
    }
    h2{
        font-size: 14px;
    }
`;