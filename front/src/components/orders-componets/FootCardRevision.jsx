import styled from "styled-components";
import FootCard from "./FootCard";

const FootCardRevision = () => {

    return (
        <CsFootCardRevision>
            <FootCard
                isRevision={true}
            />
        </CsFootCardRevision>
    )
}

export default FootCardRevision;

const CsFootCardRevision = styled.div`
    margin-top: 40px;  
`;