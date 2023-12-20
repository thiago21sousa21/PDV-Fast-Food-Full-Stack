import styled from "styled-components";
import SearchBar from "../components/orders-componets/SerachBar";
import Categories from "../components/orders-componets/Categories";
import Products from "../components/orders-componets/Products";
import FootCard from "../components/orders-componets/FootCard";
import { useContext } from "react";
import productsContext from "../contexts/products-context";

const Orders = () => {
    const { cart } = useContext(productsContext);

    return (
        <CsOrders>
            <SearchBar />
            <Categories />
            <Products />
            {cart.length > 0 && <FootCard />}
        </CsOrders>
    );
}

export default Orders;

const CsOrders = styled.div`
    width: 80%;
    margin: 0 auto 0;
`