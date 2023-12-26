import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ orders: [], client: null });
    const [orderCart, setOrderCart] = useState({});

    return (
        <CartContext.Provider
            value={{ cart, setCart, orderCart, setOrderCart }}
        >
            {children}
        </CartContext.Provider>
    )
}

