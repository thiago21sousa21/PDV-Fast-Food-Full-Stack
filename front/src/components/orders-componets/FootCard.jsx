import styled from "styled-components";

const FootCard = () => {

    return (
        <CsFootCard>
            <div className="allSelected"></div>
            <div className="cancelOrTerminate"></div>
        </CsFootCard>
    );
}

export default FootCard;

const CsFootCard = styled.div`
width: 100%;
height: 300px;

display: flex;
flex-direction: column;

.allSelected{
    height: 200px;
    width: 100%;
}
.cancelOrTerminate{
    height: 100px;
    width: 100%;
}
`