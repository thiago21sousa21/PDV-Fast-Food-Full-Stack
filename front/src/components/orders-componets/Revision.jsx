import styled from "styled-components";
import ProductInRevision from "./ProductInRevision";
import Addictionais from "./Additionals";

const Revision = ({ displayDescription }) => {
    return (
        <CsRevision>
            <h1>Revise seu pedido!</h1>
            <ProductInRevision
                displayDescription={displayDescription}
            />
            <Addictionais />
        </CsRevision>
    )
}

export default Revision

const CsRevision = styled.div`
    margin: 30px auto;
    width: 70vw;
    background-color: white;
    height: 800px;
    padding: 40px;

    border: 1px solid;
    *{border: 1px solid;}

    h1{
        font-size: 35px;
    }
`