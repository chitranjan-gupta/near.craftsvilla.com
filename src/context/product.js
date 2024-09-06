import { createContext, useContext } from "react";
import useFetch from "../hooks/usefetch";
import Loader from "../components/loader";
export const ProductContext = createContext([]);

export default function ProductContextProvider({ children }) {
    const { loading, data, error } = useFetch('https://dummyjson.com/products?limit=10&skip=10')
    return <ProductContext.Provider value={data.products}>
        {loading && <Loader/>}
        {error && <div>{error}</div>}
        {!loading && children}
    </ProductContext.Provider>
}

export const useProduct = () => {
    return useContext(ProductContext);
}