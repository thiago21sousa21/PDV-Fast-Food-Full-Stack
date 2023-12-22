import { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";

const ProductInRevision = ({ displayDescription }) => {
    const { orderRef } = useContext(CartContext);

    const [cont, setCont] = useState(1)
    const { image, name, value, description } = displayDescription;

    orderRef.current.order.amount = cont;
    const whatAmoutnt = (operation) => {
        let newValue;
        if (operation === 'add') {
            newValue = cont + 1;
            setCont(newValue);
        }
        if (operation === 'delete' && cont > 1) {
            newValue = cont - 1;
            setCont(newValue);
        }
    }

    return (
        <CsProductInRevision>
            <div className="moldeImg">
                <img src={image} alt="" />
            </div>
            <div className="moldeDescription">
                <div className="moldeTitle">
                    <h1>{name}</h1>
                    <h1>{value}</h1>
                </div>
                <h2>{description}</h2>
                <div className="moldeCont">
                    <ion-icon
                        name="remove-circle"
                        onClick={() => whatAmoutnt('delete')}
                    >
                    </ion-icon>
                    <h3>{cont}</h3>
                    <ion-icon
                        name="add-circle"
                        onClick={() => whatAmoutnt('add')}
                    >
                    </ion-icon>
                </div>
            </div>
        </CsProductInRevision>
    )
}

export default ProductInRevision;

const CsProductInRevision = styled.div`
    display: flex;
    //justify-content: space-between;
    margin-top: 40px;

    .moldeImg{
        border-radius: 12px;
        width: 30%;

        height: 180px;
        width: 180px;

        img{
            height: 100%;
            width: 100%;
            border-radius: 12px;
        }
    }

    .moldeDescription{
        width: 60%;

        display: flex;
        flex-direction: column;

        position: relative;
        margin-left: 30px;

        h2{
            margin-top: 5px;
            max-width: 50%;
            font-size: 14px;
        }

        .moldeCont{
            height: 40px;
            width: 120px;
            color: green;
            border-radius: 20px;
            border: 3px solid green;

            position: absolute;
            left: 0;
            bottom: 0;

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 40px;

            h3{
                color: black;
                font-size: 25px;
            }

            ion-icon{
                cursor: pointer;
                color: green;
            }

            ion-icon:nth-child(1){
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(-10px, -50%);
            }

            ion-icon:nth-child(3){
                position: absolute;
                top: 50%;
                right: 0;
                transform: translate(10px, -50%);
            }
        }
    }

    .moldeTitle{
        display: flex;
        justify-content: space-between;
        h1{
            font-size: 20px;
        }
    }

`