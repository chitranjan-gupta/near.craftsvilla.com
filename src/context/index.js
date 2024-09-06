import CategoryContextProvider from "./category";
import ProductContextProvider from "./product";
import PositionContextProvider from "./position";
import CityContextProvider from "./city";

export default function ContextProvider({ children }) {
    return <CategoryContextProvider>
        <ProductContextProvider>
            <PositionContextProvider>
                <CityContextProvider>
                    {children}
                </CityContextProvider>
            </PositionContextProvider>
        </ProductContextProvider>
    </CategoryContextProvider>
}