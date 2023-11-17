import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const MenuItems = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <>
        <div className='flex gap-4 '>
            <img className='w-[100px] h-[80px] border-2 border-[#D1A054B2]' style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" />
            <div>
                <h1 className='text-gray-500 text-xl font-semibold'>{name}-----------</h1>
                <p className='text-gray-400 text-sm'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
        </>
        
    );
};

MenuItems.propTypes = {
    item: PropTypes.object,
};

export default MenuItems;