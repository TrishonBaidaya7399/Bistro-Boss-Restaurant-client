import PropTypes from "prop-types";
import { FiLogIn } from "react-icons/fi";
// import cartImg from "../../../assets/icon/shopping-cart.png";
import { Link, NavLink } from "react-router-dom";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { TiShoppingCart  } from 'react-icons/ti';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import avatar from "../../../assets/others/profile.png";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";


const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false); //#243447
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [cartLength, setCartLength] = useState(cart.length)
  const [isAdmin] = useAdmin();
  useEffect(()=>{
    const cartItems = cart.length;
    setCartLength(cartItems);
    refetch();
  },[cart, refetch])
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = darkMode ? "#18222f" : "white";
    body.style.color = darkMode ? "white" : "black";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const navItems = (
    <div className="lg:flex gap-6 font-semibold text-white">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"
        }
        to="/"
      >
        <li>HOME</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"
        }
        to="/contact"
      >
        <li>CONTACT US</li>
      </NavLink>
      {user 
      ? 
      <>
      {
      isAdmin 
      ?
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"
        }
        to="/dashboard/adminHome"
      >
        <li>DASHBOARD</li>
      </NavLink>
      :
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"
        }
        to="/dashboard/userHome"
      >
        <li>DASHBOARD</li>
      </NavLink> 
      }
      </>
      : ""
    }
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"
        }
        to="/menu"
      >
        <li>OUR MENU</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-yellow-300 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"
        }
        to="/order/salad"
      >
        <li>OUR SHOP</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "block md:hidden  text-yellow-300 border-b-[3px] pb-1 border-[transparent] "
            : "block md:hidden  text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-yellow-300 duration-300"
        }
        to="/dashboard/cart"
      >
        <li>My Cart</li>
      </NavLink>
    </div>
  );

  // Logout
  const handleLogOut = () => {
    setLoading(true);
    logOut()
      .then(() => {
        console.log("Logged Out Successfully!");
        setLoading(false);
        Swal.fire({
          title: "Logged out!",
          text: `${
            user?.displayName ? user.displayName : "User"
          } logged out successfully!`,
          imageUrl: user?.photoURL
            ? user.photoURL || user.photoURL
            : "https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonText: "Ok!",
        });
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
      });
  };

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

      <div className="flex gap-2 md:gap-8">
        <ul className="hidden lg:block menu menu-horizontal px-1">
          {navItems}
        </ul>

        <label className="swap swap-rotate hidden lg::block">
          <input type="checkbox" />
          {/* sun icon */}
          <BsSunFill
            onClick={() => setDarkMode(true)}
            className="swap-on fill-current text-white text-2xl md:text-3xl"
          />
          {/* moon icon */}
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(false)}
            className=" swap-off fill-current text-yellow-400 text-2xl md:text-3xl"
          />
        </label>
        {user ? (
          <>
            <div className="hidden lg:block">
              <NavLink to="/dashboard/cart">
                <button className="btn bg-[transparent] hover:bg-[transparent] border-none relative">
                  <TiShoppingCart className="bg-green-500 p-1 rounded-full border-[3px] border-yellow-300 text-5xl text-white" />
                  <div className={`absolute right-1 -bottom-2 badge bg-red-500 text-white w-7 h-7 rounded-full text-center ${cartLength > 99 ? "text-xs" : "text-md"} border-2 border-yellow-300 pb-1`}>{cartLength}</div>
                </button>
              </NavLink>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar">
                <div className="w-8 md:w-10 rounded-full border-2 border-[#D1A054B2]">
                  <img src={user?.photoURL ? user.photoURL : avatar} referrerPolicy="no-referrer"/>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-5 text-gray-200 border-[5px] border-[#D1A054B2] bg-opacity-70 drop-shadow-xl z-[1] text-center menu p-4 shadow bg-[#18222f] rounded-box w-[280px] md:w-[350px] mx-auto"
              >
                <img
                  src={user?.photoURL}
                  className="w-[200px] md:w-[200px] h-[200px] mb-2 md:h-[200px] mx-auto border-[5px] border-[#D1A054B2] rounded-full"
                  alt=""
                  referrerPolicy="no-referrer"
                />
                <h1 className="text-[20px] font-extrabold my-1">
                  {user?.displayName}
                <p className="text-lg pt-2">{isAdmin ? "( Admin )" : ""}</p>
                </h1>
                <p className="text-lg pb-4">
                  <span className="font-bold">Email:</span> {user?.email}
                </p>
                <Link onClick={handleLogOut} className="">
                  <button className="btn mt-2 bg-black bg-opacity-80 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#D1A054B2] hover:border-b-[#D1A054B2] text-[#D1A054B2] hover:text-[#D1A054B2] hover:bg-black hover:bg-opacity-100 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold">
                    {loading ? "Loading..." : "Logout"}
                  </button>
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="">
              <button className="hidden md:block btn bg-gray-700 bg-opacity-80 hover:bg-[transparent] border-b-4 border-[transparent] hover:border-[transparent] border-b-[#BB8506] hover:border-b-[#BB8506] text-yellow-400 hover:bg-black hover:bg-opacity-70 hover:drop-shadow-xl py-2 px-4 rounded-lg font-semibold">
                Login
              </button>
              <button className="block md:hidden text-2xl text-yellow-400 pb-1 pr-2 font-semibold">
              <FiLogIn />
              </button>

            </Link>
          </>
        )}
        <div className="dropdown dropdown-end">
       
          <label className="swap swap-rotate lg:hidden">
            <input type="checkbox" />
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="swap-off text-[25px] md:text-4xl text-yellow-400 bg-[transparent] "
            />
            <RxCross2
              onClick={() => setOpen(!open)}
              className="swap-on text-[25px] md:text-4xl text-yellow-400 bg-[transparent] "
            />
          </label>

          <ul
            className={`${
              open ? "block" : "hidden"
            } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-gray-200 border-2 border-gray-200 bg-opacity-70 drop-shadow-xl bg-black `}
          >
            {navItems}
          <div className="flex gap-2">
          <label className="swap swap-rotate ">
          <input type="checkbox" />
          {/* sun icon */}
          <BsSunFill
            onClick={() => setDarkMode(true)}
            className="swap-on fill-current text-white text-2xl md:text-3xl"
          />
          {/* moon icon */}
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(false)}
            className=" swap-off fill-current text-yellow-400 text-2xl md:text-3xl"
          />
        </label>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.node,
};

export default NavBar;
