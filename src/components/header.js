import craftsvillalogo from "../assets/images/craftsvilla-logo.png"
import heart from "../assets/icons/heart.svg";
import search from "../assets/icons/search.png";
import ondc from "../assets/icons/ondc.svg";

const Header = () => {
    return (
        <header className="w-100"><nav className="navbar navbar-expand-lg bg-white w-100">
            <div className="bg-white w-100 container-fluid row-gap-3">

                <div>
                    <a className="navbar-brand d-flex flex-column" href={"/"}>
                        <img src={craftsvillalogo} alt="craftsvilla" width="60" height="25" />
                        <span style={{ fontSize: "10px" }}>Your Local Store App</span>
                    </a>

                </div>

                <div className="d-flex flex-column-reverse flex-lg-row">
                    <div className="collapse navbar-collapse d-none d-lg-block">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="d-flex flex-row column-gap-1">
                        <button className="border border-0 bg-white">
                            <img src={heart} width="20" height="20" alt="heart" />
                        </button>
                        <button className="navbar-toggler border border-0 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={search} width="20" height="20" alt="search" />
                        </button>
                        <div>
                            <img src={ondc} width="60" height="40" alt="ondc" />
                        </div>
                    </div>

                </div>

                <div className="collapse d-sm-block d-md-none d-lg-none" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </div>
        </nav>
        </header>)
}

export default Header;
