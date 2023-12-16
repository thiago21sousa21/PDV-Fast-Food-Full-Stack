import styled from "styled-components";
import SearchBar from "../components/orders-componets/SerachBar";
import Categories from "../components/orders-componets/Categories";
import Products from "../components/orders-componets/Products";

const Orders = () => {

    return (
        <CsOrders>
            <SearchBar />
            <Categories />
            <Products />

        </CsOrders>
    );
}

export default Orders;

const CsOrders = styled.div`
    width: 80%;
    margin: 0 auto 0;
`