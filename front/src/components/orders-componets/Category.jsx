/* eslint-disable react/prop-types */
import styled from "styled-components";

const Category = ({ data }) => {
    const { name, image } = data;
    return (
        <CsCategory>
            <img src={image} alt="" />
            <h1>{name}</h1>
        </CsCategory>
    );
}

export default Category;

const CsCategory = styled.div`
    width: 165px;
    height: 100px;
    text-align: center;
    img{
        height: 70px;
    }
`