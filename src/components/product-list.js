import "../styles/product-list.css"
import close from "../assets/icons/close.png";
import heart from "../assets/icons/heart.svg";
import call from "../assets/icons/call.svg";
import pricetags from "../assets/icons/pricetags.svg";
import sharesocial from "../assets/icons/share-social.svg";
import volumehigh from "../assets/icons/volume-high.svg";
import ProductCard from "./product-card";
import { camelCase } from "../utils";

const ProductList = ({ products, category }) => {
    return <div className="border rounded-top-5 overflow-hidden bg-white collapse product-list-view" id="productlist">
        <div className="d-flex flex-column p-4">
            <div>
                <div className="d-flex flex-row align-items-center justify-content-between w-100">
                    <div className="d-flex flex-row column-gap-3">
                        <span className="text-nowrap">Products</span>
                        <button className="border bg-white rounded-circle p-1">
                            <img src={heart} width="20" height="20" />
                        </button>
                    </div>
                    <div>
                        <button className="border border-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#productlist" aria-expanded="false" aria-controls="productlist">
                            <img src={close} width="20" height="20" />
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start column-gap-4 w-100">
                    <span>40km</span>
                    <span>{camelCase(category)}</span>
                    <span style={{ color: "green"}}>Open</span>
                    <span style={{ fontWeight: "500"}}>Close: 23:00</span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start column-gap-4 mt-2 w-100">
                    <a href="tel:535252">
                        <button className="border bg-white rounded-3">
                            <img src={call} width="25" height="25" />
                        </button>
                    </a>
                    <a href="tel:535252">
                        <button className="border bg-white rounded-3">
                            <img src={volumehigh} width="25" height="25" />
                        </button>
                    </a>
                    <a href="tel:535252">
                        <button className="border bg-white rounded-3">
                            <img src={sharesocial} width="25" height="25" />
                        </button>
                    </a>
                    <a href="tel:535252">
                        <button className="border bg-white  rounded-3">
                            <img src={pricetags} width="25" height="25" />
                        </button>
                    </a>
                </div>
            </div>
            <div className="d-flex flex-row flex-nowrap column-gap-3 align-items-center justify-content-between absolute overflow-scroll mt-2 p-4 w-100" style={{ height: "260px"}}>
                {products.map((product) => <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} discountPercentage={product.discountPercentage} imgUrl={product.images[0]} />)}
            </div>
        </div>
    </div>
}

export default ProductList;
