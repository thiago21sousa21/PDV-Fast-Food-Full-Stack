/* eslint-disable react/prop-types */
import styled from "styled-components";

const Product = ({ data }) => {
    //const { image } = data;
    return (
        <CsProduct>
            <img src={''} alt="" />
            <h1>Name</h1>
            <h2>description</h2>
        </CsProduct>
    );
}

export default Product;

const CsProduct = styled.div`
    width: 165px;
    height: 233.34px;

`