import { useState } from "react";
import { styled } from "styled-components";


const Header = () => {

    const [selected, setSelected] = useState('.orders')

    return (
        <CsHeader
            $selected={selected}
        >
            <div className="logo">
                <div className="imageLogo">
                    <ion-icon name="fast-food-outline"></ion-icon>
                </div>
                <p>FastFood</p>
            </div>
            <div className="pages">
                <button
                    className="orders"
                    onClick={() => setSelected('.orders')}
                >
                    pedidos
                </button>
                <button
                    className="kitchen"
                    onClick={() => setSelected('.kitchen')}
                >
                    cozinha
                </button>
                <button
                    className="pickup"
                    onClick={() => setSelected('.pickup')}
                >
                    retirada
                </button>
            </div>
        </CsHeader>
    );
}

export default Header;

const CsHeader = styled.div`
    border: 1px solid;
    width: 100%;
    height: 40px;
    background-color: #125C13;

    display: flex;
    justify-content: space-between;
    padding: 5px 20px;

    .logo{
        display: flex;
        align-items: center;

        background-color: white;
        color: #125C13;
        border-radius: 15px;
        .imageLogo{
            margin-left: 10px;
        }
        p{
            margin-right: 10px;
        }
    }

    .pages{
        display: flex;

        ${p => p.$selected}{
            background-color: #0c3d0c;
        }
    }

    button{
        border-radius: 12px;
        background-color: #125C13;
        margin: 0 5px;
        cursor: pointer;
        color: white;
    }
`