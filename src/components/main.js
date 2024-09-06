import "../styles/main.css";
import ProductList from "./product-list";
import Filters from "./filters";
import { useProduct } from "../context/product"
import Map from "./map";
import { useCategory } from "../context/category";
import setting from "../assets/icons/setting.png";
import chat from "../assets/icons/chat.svg";

const Main = () => {
    const products = useProduct();
    const categories = useCategory()
    return <main className="w-100 overflow-hidden relative">
        <div className="d-flex flex-row column-gap-2 bg-white rounded-5 p-2" style={{ zIndex: "999", position: "relative", float: "right", transform: "translateY(20px)" }}>
            <button type="button" className="btn bg-white border rounded-5">
                Show All
            </button>
            <button type="button" className="btn bg-white border rounded-5 d-flex flex-row align-items-center justify-content-center column-gap-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <span>
                    Filters
                </span>
                <img src={setting} alt="setting" width={15} height={15} />
            </button>
        </div>
        <div className="d-flex flex-row align-items-center column-gap-2 rounded-5 chat-view" style={{ width: "80px", height: "50px", zIndex: "999", position: "relative", backgroundColor: "#981937", paddingLeft: "5px" }}>
            <div>
                <img src={chat} alt="chat" width={30} height={30} />
            </div>
        </div>
        <Map />
        <Filters />
        {products && products.length && <ProductList products={products} category={categories[0]} />}

    </main>
}

export default Main;
