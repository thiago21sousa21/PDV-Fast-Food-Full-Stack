import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";

const Observation = () => {
    const { orderRef } = useContext(CartContext)

    const writeObservation = (e) => {
        const value = e.target.value;
        orderRef.current.order.observation = value;
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
                value={orderRef.current.order.observation}
            />
        </CsObservation>
    )
}

export default Observation;

const CsObservation = styled.div`
    margin-top: 40px;

    textarea{
        width: 100%;
        background-color: #F4F4F4;
        outline: 0;
        border-radius: 12px;
        border: 1ps solid gray;
        padding: 10px;
    }
`;