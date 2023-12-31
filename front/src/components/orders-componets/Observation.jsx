import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";

const Observation = () => {
    const { orderCart } = useContext(CartContext)

    const writeObservation = (e) => {
        const value = e.target.value;
        orderCart.order.observation = value;
    }
    return (
        <CsObservation>
            <h1>Observações</h1>
            <textarea
                name="observation"
                id="observation"
                cols=""
                rows="5"
                onChange={writeObservation}
                value={orderCart.order.observation}
            />
        </CsObservation>
    )
}

export default Observation;

const CsObservation = styled.div`
    margin-top: 40px;
    padding: 15px;

    textarea{
        width: 100%;
        background-color: #F4F4F4;
        outline: 0;
        border-radius: 12px;
        border: 1ps solid gray;
        padding: 10px;
    }
`;