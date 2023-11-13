// import PropTypes from 'prop-types';
import Title from '../../../Components/Title/Title';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import { Link } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';

const PopularItems = () => {
    const [menu] = useMenu();
    const popular = menu.filter( m=> m.category === "popular") 
    // const [menu, setMenu] =  useState([])
    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         // const popular = data.filter(item => item.category === "popular")
    //         const popular = data
    //         setMenu(popular)
    //     })
    // },[])
    return (
        <section className='pt-12 lg:mx-[200px] flex flex-col items-center'>
            <Title heading={"FROM OUR MENU"} subHeading={'Check it out'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                popular.slice(0,6).map(item=> <MenuItems key={item._id} item={item} />)
            }   
            </div>
            <Link to="/menu"><button className='btn bg-[transparent] hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-orange-500 hover:border-b-orange-500 text-orange-500 hover:text-orange-500 hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg mt-8 font-semibold'>View Full Menu</button></Link>
        </section>
    );
};

PopularItems.propTypes = {
    
};

export default PopularItems;