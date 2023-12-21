import styled from "styled-components";
import Revision from "./Revision";

const DescriptionProduct = ({ setDisplayDescription, displayDescription }) => {

    return (
        <CsDescriptionProduct>
            <Revision
                displayDescription={displayDescription}
                setDisplayDescription={setDisplayDescription}
            />
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

    
`;