import "../styles/product-view.css";
import { useEffect, useState } from "react";
import { useProduct } from "../context/product";
import { discountPrice, camelCase } from "../utils";

const ProductView = ({ id }) => {
    const products = useProduct();
    const [product, setProduct] = useState({});
    const [selectedImage, setSelectedImage] = useState(0);
    useEffect(() => {
        if (products) {
            setProduct(products.filter((product) => product.id == id)[0]);
        }
        if (typeof window !== "undefined") {
            if (product && product.title) {
                document.title = product.title;
            }
        }
    }, [products])
    return <>{product && product.title && <div>
        <div>
            <div className="product-view">
                <div className="d-flex flex-row align-items-start justify-content-start">
                    <div className="product-images">{product.images && product.images.length > 0 && product.images.map((image, i) => <img key={image} src={image} alt={image} width={100} height={100} onClick={() => setSelectedImage(i)} />)}</div>
                    <div className="d-none d-md-block d-lg-block">{product.images && product.images.length > 0 && <img src={product.images[selectedImage]} alt={product.title} width={700} height={500} />}</div>
                </div>
                <div className="d-flex flex-column justify-content-between h-100 product-content">
                    <div className="w-100">
                        <div className="" style={{ fontWeight: "500" }}>{product.title}</div>
                        <div style={{ color: "gray" }}>{camelCase(product.category)}</div>
                        <div>
                            <div className="d-flex flex-row column-gap-2">
                                <span style={{ color: "black", fontWeight: "500" }}>{`₹ ${Math.ceil(discountPrice(product.price, product.discountPercentage))}`}</span>
                                <span style={{ textDecoration: "line-through", color: "gray" }}>{`₹ ${Math.ceil(product.price)}`}</span>
                                <span className="rounded-5 d-flex flex-row align-items-center justify-content-center" style={{ backgroundColor: "#FF6746", color: "white", padding: "2px", fontSize: "12px", width: "60px" }}>{`${Math.ceil(product.discountPercentage)}% OFF`}</span>
                            </div>
                            <span style={{ color: "gray" }}>inclusive of all taxes</span>
                        </div>

                        <div className="w-100 d-none d-md-flex d-lg-flex flex-row align-items-center justify-content-between pt-1 pb-1" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                            <button className="border rounded-1 bg-white" style={{ width: "150px", height: "40px", fontWeight: "500" }}>Add to Cart</button>
                            <button className="border rounded-1" style={{ width: "150px", height: "40px", backgroundColor: "#981937", color: "white", fontWeight: "500" }}>Buy Now</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div style={{ fontWeight: "500" }}>Product Description</div>
                        <div style={{ color: "gray" }}>{product.description}</div>
                    </div>
                    <hr />
                    <div>
                        <div style={{ fontWeight: "500" }}>Product Detail</div>
                        <div className="d-flex flex-row flex-wrap column-gap-4 row-gap-2">
                            <div className="d-flex flex-column" style={{ width: "150px" }}>
                                <span>Width</span>
                                <span style={{ color: "gray" }}>{`${product.dimensions.width}m`}</span>
                                <hr />
                            </div>
                            <div className="d-flex flex-column" style={{ width: "150px" }}>
                                <span>Height</span>
                                <span style={{ color: "gray" }}>{`${product.dimensions.height}m`}</span>
                                <hr />
                            </div>
                            <div className="d-flex flex-column" style={{ width: "150px" }}>
                                <span>Depth</span>
                                <span style={{ color: "gray" }}>{`${product.dimensions.depth}m`}</span>
                                <hr />
                            </div>
                            <div className="d-flex flex-column" style={{ width: "150px" }}>
                                <span>Weight</span>
                                <span style={{ color: "gray" }}>{`${product.weight}kg`}</span>
                                <hr />
                            </div>
                        </div>
                        <div className="collapse" id="productdetail">
                            <div className="d-flex flex-row flex-wrap column-gap-4 row-gap-2" >
                                <div className="d-flex flex-column" style={{ width: "150px" }}>
                                    <span>Return Policy</span>
                                    <span style={{ color: "gray" }}>{product.returnPolicy}</span>
                                    <hr />
                                </div>
                                <div className="d-flex flex-column" style={{ width: "150px" }}>
                                    <span>Warranty</span>
                                    <span style={{ color: "gray" }}>{product.warrantyInformation}</span>
                                    <hr />
                                </div>
                                <div className="d-flex flex-column" style={{ width: "150px" }}>
                                    <span>Availability</span>
                                    <span style={{ color: "gray" }}>{product.availabilityStatus}</span>
                                    <hr />
                                </div>
                                <div className="d-flex flex-column" style={{ width: "150px" }}>
                                    <span>Rating</span>
                                    <span style={{ color: "gray" }}>{product.rating}</span>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="border border-0 bg-white" style={{ color: "green" }} type="button" data-bs-toggle="collapse" data-bs-target="#productdetail" aria-expanded="false" aria-controls="productdetail">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19"><path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.002" d="m4.786 6.898 5.793 4.986 5.794-4.986"></path></svg>
                                See More
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div style={{ fontWeight: "500" }}>Sold By</div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div>{product.brand && <span>{product.brand}</span>}</div>
                            <div>
                                <button className="border border-0 bg-white" style={{ color: "green" }}>
                                    <svg style={{ transform: "rotate(-90deg)" }} xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19"><path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.002" d="m4.786 6.898 5.793 4.986 5.794-4.986"></path></svg>
                                    View store
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 flex-row align-items-center justify-content-center column-gap-5 pt-1 pb-1 calltoaction" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <button className="border rounded-1 bg-white" style={{ width: "150px", height: "50px", fontWeight: "500" }}>Add to Cart</button>
                <button className="border rounded-1" style={{ width: "150px", height: "50px", backgroundColor: "#981937", color: "white", fontWeight: "500" }}>Buy Now</button>
            </div>
        </div>
    </div>}</>
}

export default ProductView;
