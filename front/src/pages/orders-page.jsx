import styled from "styled-components";
import SearchBar from "../components/orders-componets/SerachBar";
import Categories from "../components/orders-componets/Categories";
import Products from "../components/orders-componets/Products";
import FootCard from "../components/orders-componets/FootCard";

const Orders = () => {

    return (
        <CsOrders>
            <SearchBar />
            <Categories />
            <Products />
            <FootCard />
        </CsOrders>
    );
}

export default Orders;

const CsOrders = styled.div`
    width: 80%;
    margin: 0 auto 0;
`