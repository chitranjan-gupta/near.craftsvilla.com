import { Link } from "react-router-dom";
import { discountPrice } from "../utils";

const ProductCard = ({ id, imgUrl, title, price, discountPercentage }) => {
    return (
        <Link to={`/product/s/${id}`} style={{ textDecoration: "none", color: "black"}}>
            <div className="shadow p-2 rounded-2" style={{ width: "150px", height: "210px" }}>
                <div className="w-100 h-100">
                    <div className="w-100 d-flex flex-row align-items-center justify-content-center">
                        <img src={imgUrl} style={{ width: "130px", height: "140px" }} alt={title} />
                    </div>
                    <div className="">
                        <h5 className="w-100" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden"}}>{title}</h5>
                        <div className="d-flex flex-row column-gap-1">
                            <span style={{ whiteSpace: "nowrap", fontWeight: "500", fontSize: "13px"}}>{`₹${Math.ceil(discountPrice(price, discountPercentage))}`}</span>
                            <span style={{ textDecoration: "line-through", color: "gray", fontSize: "12px"}}>{`₹${Math.ceil(price)}`}</span>
                            <span className="rounded-5" style={{ backgroundColor: "#ff4700", color: "white", padding: "2px", fontSize: "12px"}}>{`${Math.ceil(discountPercentage)}% OFF`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>);
}

export default ProductCard;
