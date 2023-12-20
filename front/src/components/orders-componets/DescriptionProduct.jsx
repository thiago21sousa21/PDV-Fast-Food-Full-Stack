import styled from "styled-components";

const DescriptionProduct = ({ setDisplayDescription }) => {

    return (
        <CsDescriptionProduct>
            <div className="fechar"
                onClick={() => setDisplayDescription(undefined)}
            >
                x
            </div>
        </CsDescriptionProduct>
    )
}

export default DescriptionProduct;

const CsDescriptionProduct = styled.div`
    border: 4px solid red;
    width: 100vw;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    .fechar{
        position: absolute;
        top: 10px;
        right: 20px;

        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: red;

        cursor: pointer;

        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;