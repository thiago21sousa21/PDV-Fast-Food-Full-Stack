import styled from "styled-components";
import SideDisheSelected from "./SideDisheSelected";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const FootCard = (props) => {
    const { isRevision } = props;
    const { orderCart } = useContext(CartContext)
    const { value, name, amount, totalValue } = orderCart.order;
    return (
        <CsFootCard>
            <div className="allSelected">
                <div className="products">
                    <div className="lineProduct">
                        <p>{`${amount}x ${name}`}</p>
                        <p>{`R$ ${value}`}</p>
                    </div>
                    {orderCart.order.dishes && orderCart.order.dishes.map((info, idx) => <SideDisheSelected key={idx} info={info} />)}
                </div>
                <div className="totalOrder">
                    <h2>Total do pedido</h2>
                    <h1>{`R$ ${totalValue}`}</h1>
                </div>
            </div>

            <div className="cancelOrTerminate">
                {
                    isRevision ?
                        <button

                        >
                            Adicionar ao carrinho
                        </button> :
                        <button>Cancelar</button>
                }
                <button className="finish">Finalizar pedido</button>
            </div>
        </CsFootCard>
    );
}

export default FootCard;

const CsFootCard = styled.div`
width: calc(100% - 30px);
//height: 300px;

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