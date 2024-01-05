// import PropTypes from 'prop-types';

import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>{`BISTRO BOSS | Home`}</title>
            </Helmet>
            <Banner className=""/>
            <Category/>
            <ChefService/>
            <PopularItems/>
            <CallUs/>
            <ChefRecommends/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;