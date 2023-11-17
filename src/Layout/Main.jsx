// import PropTypes from 'prop-types';

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    const location =useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes("register")
    return (
        <div className="font-serif">
            {noHeaderFooter || <NavBar/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;