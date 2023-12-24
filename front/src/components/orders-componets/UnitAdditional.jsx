import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";

const UnitAdditional = ({ info }) => {
    const [isChecked, setIschecked] = useState(false);
    const { value, name, description, image, id } = info;
    const { orderCart, setOrderCart } = useContext(CartContext)

    const addRemove = () => {
        let newArr = { ...orderCart }
        const isIncludes = newArr.order.dishes.some(e => e.id === id);
        if (!isIncludes) {
            newArr.order.dishes.push({ id, name, value });
            newArr.order.totalValue = newArr.order.totalValue + (value * newArr.order.amount);
            setOrderCart(newArr);
        } else if (isIncludes) {
            newArr.order.dishes = newArr.order.dishes.filter(e => e.id !== id);
            newArr.order.totalValue = newArr.order.totalValue - (value * newArr.order.amount);
            setOrderCart(newArr);
        }
    }

    const handleCheckDishe = () => {
        setIschecked(!isChecked);
        addRemove();
    }

    return (
        <CsUnitAdditional>
            <div className="moldeImageInfo molde">
                <div className="moldeImg">
                    <img src={image} alt="" />
                </div>
                <div className="moldeInfo">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <div className="valueAndCheck molde">
                <p>{`R$ ${value}`}</p>
                <div className="check" onClick={handleCheckDishe}>
                    {isChecked && <div className="circle"></div>}
                </div>
            </div>
        </CsUnitAdditional>
    );
}

export default UnitAdditional;

const CsUnitAdditional = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 5px;

    .molde{
        display: flex;
    }

    .moldeImg{
        width: 70px;
        height: 70px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .moldeInfo{
        padding-left: 30px;

        h1{
            font-size: 20px;
        }
    }

    .valueAndCheck{
        align-items: center;

        .check{
            width: 20px;
            height: 20px;
            border: 2px solid green;
            border-radius: 50%;
            cursor: pointer;

            margin-left: 30px;

            display: flex;
            justify-items: center;
            align-items: center;



            .circle{
                width: 85%;
                height: 85%;
                border-radius: 50%;
                background-color: green;

                margin: auto auto;
            }
        }
    }
`;