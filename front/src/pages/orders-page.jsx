import styled from "styled-components";
import SearchBar from "../components/orders-componets/SerachBar";
import Categories from "../components/orders-componets/Categories";
import Products from "../components/orders-componets/Products";
import FootCard from "../components/orders-componets/FootCard";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useEffect } from 'react';
import axios from 'axios';
import { ProductsContext } from "../contexts/ProductsContext";

const Orders = () => {
    const { cart } = useContext(CartContext);
    const { setProducts } = useContext(ProductsContext)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
            .then(r => {
                console.log(r.data)
                setProducts(r.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

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