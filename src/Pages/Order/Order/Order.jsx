// import PropTypes from 'prop-types';
import orderBg from "../../../assets/shop/banner2.jpg"
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import "./Order.css"
import useMenu from "../../../Hooks/useMenu";
import FoodCards from "../../../Components/Food Cards/FoodCards";
import { useParams } from "react-router-dom";

const Order = () => {
    const [menu] = useMenu();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const category = useParams();
    console.log(category);
    const initialCategory = categories.indexOf(category.category);
    console.log(initialCategory); //value always -1

    const [tabs, setTabs] = useState(initialCategory); //value always -1
        const salads = menu.filter(item => item.category === "salad")
        const pizzas = menu.filter(item => item.category === "pizza")
        const soups = menu.filter(item => item.category === "soup")
        const desserts = menu.filter(item => item.category === "dessert")
        const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <Helmet>
            <title>{`BISTRO BOSS | Our Shop | ${category?.category} `}</title>
            </Helmet>

            <div className="">
            <Cover heading={"OUR SHOP"} subHeading={"Would you like to try a dish?"} image={orderBg}/>
            {/* <Title heading={"TODAY'S OFFER"} subHeading={"Don't miss"}/>
            <MenuCategory category={"offered"}/> */}
            <div className="mt-6 lg:mt-[100px] mb-[60px] mx-2">
            <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
                <TabList className="tabs flex lg:gap-12 justify-center">
                    <Tab className="tab tab-bordered font-semibold text-sm md:text-lg text-black">SALAD</Tab>
                    <Tab className="tab tab-bordered font-semibold text-sm md:text-lg text-black">PIZZA</Tab>
                    <Tab className="tab tab-bordered font-semibold text-sm md:text-lg text-black">SOUP</Tab>
                    <Tab className="tab tab-bordered font-semibold text-sm md:text-lg text-black">DESSERT</Tab>
                    <Tab className="tab tab-bordered font-semibold text-sm md:text-lg text-black">DRINK</Tab>
                </TabList>

                <TabPanel>
                    <FoodCards items={salads}/>
                </TabPanel>
                <TabPanel>
                    <FoodCards items={pizzas}/>
                </TabPanel>
                <TabPanel>
                    <FoodCards items={soups}/>
                </TabPanel>
                <TabPanel>
                    <FoodCards items={desserts}/>
                </TabPanel>
                <TabPanel>
                    <FoodCards items={drinks}/>
                </TabPanel>
            </Tabs>
            </div>
            </div>
        </div>
    );
};

Order.propTypes = {
    
};

export default Order;