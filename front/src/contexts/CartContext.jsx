import { createContext, useRef, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const orderRef = useRef({});

    return (
        <CartContext.Provider
            value={{ cart, setCart, orderRef }}
        >
            {children}
        </CartContext.Provider>
    )
}

