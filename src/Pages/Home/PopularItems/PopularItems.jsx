// import PropTypes from 'prop-types';
import Title from '../../../Components/Title/Title';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import { Link } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';

const PopularItems = () => {
    const [menu] = useMenu();
    const popular = menu.filter( m=> m.category === "popular") 
    return (
        <section className='lg:pt-12 mx-2 lg:mx-[200px] flex flex-col items-center'>
            <Title heading={"FROM OUR MENU"} subHeading={'Check it out'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                popular.slice(0,6).map(item=> <MenuItems key={item._id} item={item} />)
            }   
            </div>
            <Link to="/menu"><button className='btn bg-gray-200 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#D1A054B2] hover:border-b-[#D1A054B2] text-[#D1A054B2] hover:text-[#D1A054B2] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg mt-8 font-semibold'>View Full Menu</button></Link>
        </section>
    );
};

PopularItems.propTypes = {
    
};

export default PopularItems;