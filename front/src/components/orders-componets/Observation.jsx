import styled from "styled-components";

const Observation = () => {

    return (
        <CsObservation>
            <h1>Observações</h1>
            <textarea name="observation" id="observation" cols="" rows="5"></textarea>
        </CsObservation>
    )
}

export default Observation;

const CsObservation = styled.div`
    margin-top: 40px;

    textarea{
        width: 100%;
        background-color: #F4F4F4;
        outline: none;
    }
`;