// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div className="font-serif">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;