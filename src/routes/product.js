import { useCategory } from "../context/category";
import { useParams } from "react-router-dom";
import ProductView from "../components/product-view";
import { camelCase } from "../utils";

const Product = () => {
    const { id } = useParams();
    const categories = useCategory();
    if (id) {
        return (
            <div>
                <div className="p-2 d-none d-md-block d-lg-block">{categories && categories.length > 0 && <ul className="d-flex flex-row align-items-center justify-content-between column-gap-2 overflow-y-hidden overflow-x-scroll">
                    {categories.map((category) => <li key={category} className="" style={{ listStyle: "none", textOverflow: "clip", whiteSpace: "nowrap", height: "25px" }}>{camelCase(category)}</li>)}
                </ul>}</div>
                <ProductView key={id} id={id} />
            </div>
        );
    }
    return <div>Not Found</div>;
}

export default Product;
