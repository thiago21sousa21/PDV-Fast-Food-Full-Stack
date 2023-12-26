import styled from "styled-components";
import SideDisheSelected from "./SideDisheSelected";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import SelectedProducts from "./SelectedProducts";

const FootCard = (props) => {
    const { isRevision } = props;
    const { orderCart, cart, setCart } = useContext(CartContext)
    const { value, name, amount, totalValue } = orderCart.order || {};


    const addCart = () => {
        const newCart = { ...cart }
        newCart.orders.push(orderCart);
        setCart(newCart)
    }

    return (
        <CsFootCard>
            <div className="allSelected">
                <div className="products">

                    {(cart.orders.length > 0 && !isRevision) && cart.orders.map((ord, idx) => <SelectedProducts key={idx} info={ord.order} />)}

                    {isRevision && (
                        <div className="moldeProductWithDishes">
                            <div className="lineProduct">
                                <p>{`${amount}x ${name}`}</p>
                                <p>{`R$ ${value}`}</p>
                            </div>
                            {orderCart.order.dishes && orderCart.order.dishes.map((info, idx) => <SideDisheSelected key={idx} info={info} />)}
                        </div>
                    )}
                </div>
                <div className="totalOrder">
                    <h2>Total do pedido</h2>
                    {isRevision ? (
                        <h1>{`R$ ${totalValue}`}</h1>
                    ) : (
                        <h1>{`R$ ${cart.orders.reduce((total, current) => current.order.totalValue + total, 0)}`}</h1>
                    )}

                </div>
            </div>

            {
                isRevision ?
                    <div className="cancelOrTerminate">
                        <button onClick={() => addCart()}>Adicionar ao carrinho</button>
                        <button className="finish">Finalizar pedido</button>
                    </div>
                    :
                    <div className="cancelOrTerminate">
                        <button onClick={() => setCart({ orders: [], client: null })}>Cancelar</button>
                        <button className="finish">Finalizar pedido</button>
                    </div>
            }


        </CsFootCard >
    );
}

export default FootCard;

const CsFootCard = styled.div`
width: 100%;
/* border: 1px solid;
*{border: 1px solid;    } */
display: flex;
flex-direction: column;

padding: 15px;

.allSelected{
    //height: 180px;
    width: 100%;
    border: 2px solid gray;
    border-radius: 12px;

    padding: 20px;

    .products{
        border-bottom: 2px dashed gray;
        padding:15px 0 50px 0;
        //border: 2px solid red;
        .lineProduct{
            display: flex;
            justify-content: space-between;
        }
    }
    .totalOrder{
        padding-top: 15px;
        h2{
            font-size: 25px;
        }
        h1{
            font-size: 40px;
        }
    }

}
.cancelOrTerminate{
    height: 70px;
    width: 100%;

    display: flex;
    justify-content: end;
    align-items: end;

    button{
        margin: 0 10px;
        
        height: 50px;
        background-color: white;
        color: green;
        border: 2px solid green;
        border-radius: 12px;
        width: 160px;

        cursor: pointer;
    }

    .finish{
        color: white;
        background-color: green;
        border: none;
    }

}
`