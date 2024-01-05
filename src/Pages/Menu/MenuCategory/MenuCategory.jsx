import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import MenuItems from '../../Shared/MenuItems/MenuItems';

const MenuCategory = ({items,category}) => {

    return (
    <div className='mx-2 lg:mx-[200px]'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
            items.map(item=> <MenuItems key={item._id} item={item} />)
        }  
      </div>
        <div className='flex justify-center'>
        <Link to={`/order/${category}`} className=''>
          <button className='btn bg-gray-200 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#D1A054B2] hover:border-b-[#D1A054B2] text-[#D1A054B2] hover:text-[#D1A054B2] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg mt-8 font-semibold'>ORDER YOUR FAVOURITE FOOD</button>
        </Link>
        </div>
        
    </div>
    );
};

MenuCategory.propTypes = {
  items: PropTypes.node,
  category: PropTypes.string,
};

export default MenuCategory;