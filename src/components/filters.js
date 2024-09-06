import { useCategory } from "../context/category";
import { useCity } from "../context/city";
import { camelCase } from "../utils"

const Filters = () => {
    const categories = useCategory();
    const cities = useCity();
    return <div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title fs-5" id="staticBackdropLabel">Filters</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-check form-switch form-check-reverse">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ fontWeight: "500", fontSize: "15px"}}>Show Restaurants</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <div className="form-check form-switch form-check-reverse">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ fontWeight: "500", fontSize: "15px"}}>Show Grocery Stores</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <select className="form-select" aria-label="Category">
                            <option>Category</option>
                            {categories && categories.length > 0 && categories.map((category) => <option key={category} value={category}>{camelCase(category)}</option>)}
                        </select>
                        <select className="form-select" aria-label="Default select example">
                            <option >City</option>
                            {cities && cities.length > 0 && cities.map((city) => <option key={city} value={city}>{camelCase(city)}</option>)}
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary">Clear</button>
                        <button type="button" className="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Filters;
