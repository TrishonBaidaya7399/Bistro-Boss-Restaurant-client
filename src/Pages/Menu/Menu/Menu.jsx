// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import Title from '../../../Components/Title/Title';
import menuBg from "../../../assets/menu/banner3.jpg"; 
import dessertBg from "../../../assets/menu/dessert-bg.jpeg"; 
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"; 
import saladBg from "../../../assets/menu/salad-bg.jpg"; 
import soupBg from "../../../assets/menu/soup-bg.jpg"; 
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../Hooks/useMenu';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
            <title>{`BISTRO BOSS | Our Menu`}</title>
            </Helmet>

            <div className="">
            <Cover heading={"OUR MENU"} subHeading={"Would you like to try a dish?"} image={menuBg}/>
            <Title heading={"TODAY'S OFFER"} subHeading={"Don't miss"}/>
            <MenuCategory items ={offered} category={"offered"}/> 
            {/* in video category is instead of title */}
            </div>

            <div className="my-12">
            <Cover heading={"DESSERTS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={dessertBg}/>
            <div className="mt-12">
            <MenuCategory  items ={desserts} category={"dessert"}/>
            </div>
            </div>

            <div className="my-12">
            <Cover heading={"PIZZA"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={pizzaBg}/>
            <div className="mt-12">
            <MenuCategory  items ={pizza} category={"pizza"}/>
            </div>
            </div>

            <div className="my-12">
            <Cover heading={"SALADS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={saladBg}/>
            <div className="mt-12">
            <MenuCategory  items ={salad} category={"salad"}/>
            </div>
            </div>

            <div className="my-12">
            <Cover heading={"SOUPS"} subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} image={soupBg}/>
            <div className="mt-12">
            <MenuCategory  items ={soup} category={"soup"}/>
            </div>
            </div>
        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;