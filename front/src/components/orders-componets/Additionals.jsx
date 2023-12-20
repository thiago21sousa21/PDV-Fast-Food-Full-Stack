import styled from "styled-components";

const Addictionais = () => {
    return (
        <CsAddictionais>
            <h1>Adicionais</h1>
            <h2>Selecione os ingredientes que você quer adicionar a mais no seu lanche.</h2>

        </CsAddictionais>
    )
}

export default Addictionais;

const CsAddictionais = styled.div`
    width: 100%;
    border: 1px solid;
    *{border: 1px solid;}

    h1{
        font-size: 20px;
    }
    h2{
        font-size: 14px;
    }
`;