import Header from '../components/header';
import Footer from '../components/footer';
import App from "./app";
import Product from "./product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from '../context';

function Root() {
    return (
        <ContextProvider>
            <Header />
            <Router>
                <Routes>
                    <Route exact path='/' element={<App />} />
                    <Route exact path='/product/s/:id' element={<Product />} />
                </Routes>
            </Router>
            <Footer />
        </ContextProvider>)
}

export default Root;
