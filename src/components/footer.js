import "../styles/footer.css";
import craftsvilla from "../assets/images/craftsvilla-logo.png";

const Footer = () => {
    return (<footer className="position-relative bottom-0 start-0 footer-view">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="d-flex flex-column">
                <img src={craftsvilla} alt="craftsvila" width="60" height="25" />
                <span style={{ fontSize: "10px" }}>Your Local Store App</span>
            </div>
            <div className="d-flex flex-row column-gap-5">
                <div>
                    <span> Company</span>
                    <ul style={{ listStyle: "none" }}>
                        <li>About</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <span>Social</span>
                    <ul style={{ listStyle: "none" }}>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>X</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;
