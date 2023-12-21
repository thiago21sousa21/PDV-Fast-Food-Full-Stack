import styled from "styled-components";

const FootCard = (props) => {
    const { isRevision } = props;

    return (
        <CsFootCard>
            <div className="allSelected">
                <div className="products">
                    <div className="lineProduct">
                        <p>1x Smash da  casa</p>
                        <p>R$ 30,50</p>
                    </div>
                </div>
                <div className="totalOrder">
                    <h2>Total do pedido</h2>
                    <h1>R$ 30,50</h1>
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