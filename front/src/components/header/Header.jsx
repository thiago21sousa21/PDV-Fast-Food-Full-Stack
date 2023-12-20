import { styled } from "styled-components";


const Header = () => {

    return (
        <CsHeader>
            <div className="logo">
                <div className="imageLogo">
                    <ion-icon name="fast-food-outline"></ion-icon>
                </div>
                <p>FastFood</p>
            </div>
            <div className="pages">
                <button>pedidos</button>
                <button>cozinha</button>
                <button>retirada</button>
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
    }

    button{
        border-radius: 4px;
        
    }
`