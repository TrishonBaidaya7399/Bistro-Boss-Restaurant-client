import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCard = ({item}) => {
    return (
        <div className='bg-gray-200 pb-6 rounded-md drop-shadow-lg flex flex-col justify-between'>
            <div>
            <figure>
            <img src={item?.image} className='w-full rounded-t-md' alt="" />
            <p className='absolute top-2 right-2 text-white bg-black rounded-md w-it px-4 py-1'>${item?.price}</p>
            </figure>
            <div className="my-6 mx-6 text-center">
            <h1 className='text-[24px] font-bold text-gray-700'>{item?.name}</h1>
            <p className='text-gray-500'>{item?.recipe}</p>
            </div>
            </div>
            <div className="flex justify-center ">
            <Link to="/order" className=''><button className='btn bg-gray-300 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#BB8506] hover:border-b-[#BB8506] text-[#BB8506] hover:text-[#BB8506] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold'>ADD TO CART</button></Link> 
            </div>  
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.node,
};

export default FoodCard;