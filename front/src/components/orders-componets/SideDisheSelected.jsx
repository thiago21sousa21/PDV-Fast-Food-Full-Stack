import styled from "styled-components";

const SideDisheSelected = ({ info }) => {
    const { name, value } = info;
    return (
        <CsSideDisheSelected>
            <p>{`1x ${name}`}</p>
            <p>{`R$ ${value}`}</p>
        </CsSideDisheSelected>
    )
}

export default SideDisheSelected;

const CsSideDisheSelected = styled.div`
    padding-left: 20px;

    color: gray;
    font-size: 15px;

    display: flex;
    justify-content: space-between;
`