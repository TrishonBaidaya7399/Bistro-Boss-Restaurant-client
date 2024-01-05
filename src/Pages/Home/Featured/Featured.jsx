// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import FeaturedImg from "../../../assets/home/featured.jpg"
import Title from "../../../Components/Title/Title";
import "./Featured.css"
const Featured = () => {
    return (
        <div style={{backgroundImage: `url(${FeaturedImg})`}} className="featured-item bg-fixed text-white my-6 lg:my-[80px]">
           <div className="bg-black bg-opacity-60 w-full h-full pt-6 lg:pt-[50px]">
           <Title heading={'FROM OUR MENU'} subHeading={'Check it out'}/>
            <div className="flex flex-col lg:flex-row gap-12 items-center w-full h-full px-2 md:px-12 lg:px-[150px]  lg:pt-[30px] pb-12 lg:pb-[100px]">
            <div className="lg:w-1/2">
                <img className="" src={FeaturedImg} alt="" />
            </div>
            <div className="lg:w-1/2">
                <p className="text-xl font-bold">March 20, 2023</p>
                <p className="text-xl font-bold mb-1">WHERE CAN I GET SOME?</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <Link to="/menu/"><button className='btn bg-gray-700 bg-opacity-50 mt-3 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#D1A054B2] hover:border-b-[#D1A054B2] text-[#D1A054B2] hover:text-[#D1A054B2] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold'>Read More</button></Link>
            </div>
            </div>
           </div>
        </div>
    );
};

Featured.propTypes = {
    
};

export default Featured;