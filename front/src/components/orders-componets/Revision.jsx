import styled from "styled-components";
import ProductInRevision from "./ProductInRevision";
import Addictionais from "./Additionals";
import Observation from "./Observation"
import FootCardRevision from "./FootCardRevision";

const Revision = ({ displayDescription, setDisplayDescription }) => {
    const { categoryId } = displayDescription;
    return (
        <CsRevision>
            <h1>Revise seu pedido!</h1>
            <ion-icon
                name="close-outline"
                onClick={() => setDisplayDescription(undefined)}
            >
            </ion-icon>
            <ProductInRevision
                displayDescription={displayDescription}
            />
            {categoryId === 1 && <Addictionais categoryId={categoryId} />}
            < Observation />
            <FootCardRevision />
        </CsRevision>
    )
}

export default Revision

const CsRevision = styled.div`
    margin: 30px auto;

    width: 70vw;
    background-color: white;
    border-radius: 12px;

    padding: 40px;
    position: relative;

    /* border: 1px solid;
    *{border: 1px solid;} */

    h1{
        font-size: 35px;
    }

    ion-icon{
        position: absolute;
        top: 10px;
        right: 20px;

        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: gray;
        cursor: pointer;
    }
`