// import PropTypes from 'prop-types';
import banner from "../../../assets/home/chef-service.jpg"
const ChefService = () => {
    return (
        <div className="mt-[80px] ">
            <div className="relative mx-2 lg:mx-[200px]">
            <img src={banner} alt="" className="h-[60vh] md:h-[50vh] w-full" />
            <div className="absolute bottom-0 m-2 lg:m-12 bg-white bg-opacity-80 p-3 md:p-6 lg:p-12 text-center">
                <h1 className="text-xl lg:text-3xl text-[#151515] mb-2">Bistro Boss</h1>
                <p className="text-xs md:text-sm text-[#151515]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
        </div>
    );
};

ChefService.propTypes = {
    
};

export default ChefService;