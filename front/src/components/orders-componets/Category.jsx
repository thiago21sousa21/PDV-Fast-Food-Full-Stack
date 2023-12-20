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

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 12px;
    img{
        height: 70px;
    }
`