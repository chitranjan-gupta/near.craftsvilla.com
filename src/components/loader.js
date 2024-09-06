const Loader = () => {
    return (
    <div className="d-flex flex-row align-items-center justify-items-center w-100 h-100">
        <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
        </div>
        <span>Loading...</span>
    </div>)
}

export default Loader;
