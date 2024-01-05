import { Link } from "react-router-dom";
import Title from "../../../Components/Title/Title";
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
const ChefRecommends = () => {
    return (
        <div className="mx-2 lg:mx-[200px] lg:my-[80px]">
            <Title heading={"CHEF RECOMMENDS"} subHeading={"Should Try"}/>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-200 text-gray-700 h-[500px] text-center rounded-lg drop-shadow-[0_15px_15px_rgba(0,0,0,0.40)]">
                        <img className="w-full h-2/3 rounded-t-lg" src={img1} alt="" />
                        <div className="description px-4 pt-3">
                        <h1 className="text-[24px] font-bold">Caeser Salad</h1>
                        <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <Link><button className='btn bg-gray-300 mt-2 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#D1A054B2] hover:border-b-[#D1A054B2] text-[#D1A054B2] hover:text-[#D1A054B2] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold'>Read More</button></Link>
                        </div>
                    </div>
                    <div className="bg-gray-200 text-gray-700 h-[500px] text-center rounded-lg drop-shadow-[0_15px_15px_rgba(0,0,0,0.40)]">
                        <img className="w-full h-2/3 rounded-t-lg" src={img2} alt="" />
                        <div className="description px-4 pt-3">
                        <h1 className="text-[24px] font-bold">Delicious Desserts</h1>
                        <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <Link><button className='btn bg-gray-300 mt-2 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#D1A054B2] hover:border-b-[#D1A054B2] text-[#D1A054B2] hover:text-[#D1A054B2] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold'>Read More</button></Link>
                        </div>
                    </div>
                    <div className="bg-gray-200 text-gray-700 h-[500px] text-center rounded-lg drop-shadow-[0_15px_15px_rgba(0,0,0,0.40)]">
                        <img className="w-full h-2/3 rounded-t-lg" src={img3} alt="" />
                        <div className="description px-4 pt-3">
                        <h1 className="text-[24px] font-bold">Yammi Pizza</h1>
                        <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <Link><button className='btn bg-gray-300 mt-2 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#D1A054B2] hover:border-b-[#D1A054B2] text-[#D1A054B2] hover:text-[#D1A054B2] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold'>Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ChefRecommends.propTypes = {
    
};

export default ChefRecommends;