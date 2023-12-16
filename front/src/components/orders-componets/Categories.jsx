import styled from "styled-components";
import Category from "./Category";

const Categories = () => {
    const categories = [
        {
            name: "Combos",
            image: '',
        },
        {
            name: "Acompanhamentos",
            image: '',
        },
        {
            name: "Bebidas",
            image: '',
        },
        {
            name: "Sobremesas",
            image: '',
        }
    ]

    return (
        <CsCategories>
            <h2>Categorias</h2>
            <p>Navegue por categoria</p>
            <div className="container">
                {
                    categories.map((category, idx) => <Category key={idx} data={category} />)
                }
            </div>
        </CsCategories>
    );
}

export default Categories;

const CsCategories = styled.div`
   .container{
    display: flex;
    justify-content: space-between;
   }
   margin: 20px 0;

`