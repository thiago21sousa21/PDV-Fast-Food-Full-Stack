import styled from "styled-components";
import Revision from "./Revision";

const DescriptionProduct = ({ setDisplayDescription, displayDescription }) => {

    return (
        <CsDescriptionProduct>
            <div className="fechar"
                onClick={() => setDisplayDescription(undefined)}
            >
                x
            </div>
            <Revision />
        </CsDescriptionProduct>
    )
}

export default DescriptionProduct;

const CsDescriptionProduct = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;

    overflow-y: scroll;

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