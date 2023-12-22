/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";


const Product = ({ info, category, position, getDescriptionProduct }) => {
    const { image, description, name, categoryId, id, value } = info;
    const { orderRef } = useContext(CartContext)

    const handleClickInProduct = () => {
        getDescriptionProduct({ category, position })
        orderRef.current.order = {}
        orderRef.current.order.id = id;
        orderRef.current.order.value = value;
    }

    return (
        <CsProduct
            $categoryId={categoryId}
            onClick={handleClickInProduct}
            className="marginLeft"
        >
            <div className="textZone">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <h1>{name}</h1>
                <h2>{description}</h2>
            </div>
        </CsProduct>
    );
}

export default Product;

const CsProduct = styled.div`
    width: 165px;
    height: 233.34px;
    border-radius: 15px;
    background-color: ${p => p.$categoryId === 1 ? 'pink' : p.$categoryId === 4 ? 'green' : 'yellow'};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    //margin-left: 20px;

    display: flex;
    flex-direction: column;
    justify-content: end;

    cursor: pointer;

    .textZone{
        width: 100%;
        height: 60%;
        border-radius: 15px;
        background-color: white;

        position: relative;

        text-align: center;
        .img{
            //width: 100px;
            max-height: 100px;
            position: absolute;
            top:0;
            left: 50%;
            transform: translate(-50%, -50%);

            img{
                width: 100%;
                max-height: 100px;
            }
        }

        h1{
            margin-top: 55px;
            font-size: 20px;
        }
        h2{
           
            font-size: 15px;
        }
    }
`