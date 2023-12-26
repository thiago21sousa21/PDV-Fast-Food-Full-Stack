/* eslint-disable react/prop-types */
import styled from "styled-components";
import SideDisheSelected from "./SideDisheSelected";

const SelectedProducts = ({ info: { amount, name, value, dishes } }) => {

    return (
        <CsSelectedProducts>
            <div className="lineProduct">
                <p>{`${amount}x ${name}`}</p>
                <p>{`R$ ${value}`}</p>
            </div>
            {dishes && dishes.map((info, idx) => <SideDisheSelected key={idx} info={info} />)}

        </CsSelectedProducts>
    )
}

export default SelectedProducts;

const CsSelectedProducts = styled.div`
    margin-bottom: 10px;
`