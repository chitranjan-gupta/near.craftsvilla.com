import { createContext, useContext } from "react";
import useFetch from "../hooks/usefetch";
import Loader from "../components/loader";
export const CategoryContext = createContext([]);

export default function CategoryContextProvider({ children }) {
    const { loading, data, error } = useFetch('https://dummyjson.com/products/category-list')
    return <CategoryContext.Provider value={data}>
        {loading && <Loader/>}
        {error && <div>{error}</div>}
        {!loading && children}
    </CategoryContext.Provider>
}

export const useCategory = () => {
    return useContext(CategoryContext);
}