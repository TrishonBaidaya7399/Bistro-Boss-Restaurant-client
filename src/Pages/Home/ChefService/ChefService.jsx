// import PropTypes from 'prop-types';
import banner from "../../../assets/home/chef-service.jpg"
const ChefService = () => {
    return (
        <div className="mt-[80px]">
            <div className="relative lg:mx-[200px]">
            <img src={banner} alt="" />
            <div className="absolute bottom-0 m-12 bg-white p-12 text-center">
                <h1 className="text-3xl text-[#151515] mb-2">Bistro Boss</h1>
                <p className="text-sm text-[#151515]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
        </div>
    );
};

ChefService.propTypes = {
    
};

export default ChefService;