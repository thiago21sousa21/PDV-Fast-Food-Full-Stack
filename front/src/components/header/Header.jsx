import { styled } from "styled-components";


const Header = () => {

    return (
        <CsHeader>
            <div className="logo">
                <div className="imageLogo">
                    <ion-icon name="fast-food-outline"></ion-icon>
                </div>
                <p>fastfood</p>
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

    display: flex;
    justify-content: space-between;

    .logo{
        display: flex;
    }

    .pages{
        display: flex;
    }

    button{
        border-radius: 4px;
        
    }
`