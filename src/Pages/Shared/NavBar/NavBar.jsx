// import PropTypes from 'prop-types';
import cartImg from "../../../assets/icon/shopping-cart.png"
import { Link, NavLink } from "react-router-dom";
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useEffect, useState } from "react";
import avatar from "../../../assets/others/profile.png"
import logo from "../../../assets/logo.png"

const NavBar = () => {
const [darkMode, setDarkMode] = useState(false) //#243447
const [open, setOpen] = useState(false)
useEffect(() => {
  const body = document.querySelector('body');
  body.style.backgroundColor = darkMode ? '#18222f' : 'white';
  body.style.color = darkMode ? 'white' : 'black';
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
}, [darkMode]);

const navItems = 
<div className="lg:flex gap-6 font-semibold text-white">
<NavLink className={({isActive})=> isActive ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] ": "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"} to="/"><li>HOME</li></NavLink>
<NavLink className={({isActive})=> isActive ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] ": "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"} to="/contact"><li>CONTACT US</li></NavLink>
<NavLink className={({isActive})=> isActive ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] ": "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"} to="/dashboard"><li>DASHBOARD</li></NavLink>
<NavLink className={({isActive})=> isActive ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] ": "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"} to="/menu"><li>OUR MENU</li></NavLink>
<NavLink className={({isActive})=> isActive ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] ": "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"} to="/order/salad"><li>OUR SHOP</li></NavLink>
<NavLink className={({isActive})=> isActive ? "block md:hidden  text-yellow-300 border-b-[3px] pb-1 border-[transparent] ": "block md:hidden  text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"} to="/cart"><li>My Cart</li></NavLink>
</div>
return (
<div className="navbar bg-black fixed z-20 bg-opacity-50 px-2 md:px-8 lg:px-12 flex justify-between py-2 md:py-4">
  <div className="">
    <Link to="/" className="flex flex-row gap-2 text-white font-bold">
    <img className="h-9 md:h-12" src={logo} alt="" />
    <div className="title flex flex-col">
    <p className="text-md md:text-2xl">BISTRO BOSS</p>
    <p className="text-[12px] tracking-[7px]">RESTAURANT</p>
    </div>
    </Link>
  </div>

  <div className="flex gap-8">
  <ul className="hidden lg:block menu menu-horizontal px-1">
     {navItems}
  </ul>
  <div>
    <NavLink to="/cart"><button><img className="w-[50px] hidden md:block" src={cartImg} alt="" /></button></NavLink>
  </div>
  <label className="swap swap-rotate">
  <input type="checkbox" />
  {/* sun icon */}
  <BsSunFill onClick={()=>setDarkMode(true)} className="swap-on fill-current text-white text-2xl md:text-3xl"/>
  {/* moon icon */}
  <BsFillMoonStarsFill onClick={()=>setDarkMode(false)} className=" swap-off fill-current text-yellow-400 text-2xl md:text-3xl"/>
  
</label>
  <div className="dropdown dropdown-end">
  <div tabIndex={0} className="avatar">
  <div className="w-6 md:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={avatar} />
  </div>
  </div>
  <ul tabIndex={0} className="dropdown-content text-gray-200 border-2 border-gray-200 bg-opacity-70 drop-shadow-xl z-[1] text-center menu p-4 shadow bg-[#18222f] rounded-box w-[350px]">
    <img src={avatar} className="w-[200px] md:w-[200px] h-[200px] md:h-[200px] mx-auto border-2 border-orange-500 rounded-full" alt="" />
    <h1 className="text-xl font-extrabold py-1">Trishon Baidaya</h1>
    <p className="text-lg pb-4"><span className="font-bold">Email:</span> shukantobaidya2018@gmail.com</p>
    <Link to="" className=''><button className='btn bg-gray-300 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#BB8506] hover:border-b-[#BB8506] text-[#BB8506] hover:text-[#BB8506] hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold'>Log Out</button></Link> 
  </ul>
</div>
  <div className="dropdown dropdown-end">
      <label className="swap swap-rotate lg:hidden">
        <input type="checkbox" />
          <GiHamburgerMenu onClick={()=> setOpen(!open)} className="swap-off text-[25px] md:text-4xl text-orange-500 bg-[transparent] "/>
          <RxCross2 onClick={()=> setOpen(!open)} className="swap-on text-[25px] md:text-4xl text-orange-500 bg-[transparent] "/>
      </label>

      <ul className={`${open ? "block" : "hidden"} menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-gray-200 border-2 border-gray-200 bg-opacity-70 drop-shadow-xl bg-black `}>
        {navItems}
      </ul>
    </div>
  </div>
</div>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;