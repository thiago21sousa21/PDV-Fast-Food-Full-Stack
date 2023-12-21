import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(undefined);

    return (
        <ProductsContext.Provider value={{ products, setProducts }} >
            {children}
        </ProductsContext.Provider>
    )
}
