// import PropTypes from 'prop-types';
import { HiShoppingCart } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import {
  FaBook,
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaList,
} from "react-icons/fa";
import { MdPayments, MdEmail } from "react-icons/md";
import { GiStarsStack, GiShoppingBag, GiForkKnifeSpoon, GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const DashBoard = () => {
  const [cart, refetch] = useCart();
  const [open, setOpen] = useState(true);
  const [isAdmin] = useAdmin();
  console.log("IsAdmin: ",isAdmin);
  refetch();
  return (
    <div className="flex overflow-y-hidden bg-gray-100">
        <label className={`swap swap-rotate pt-2 pl-4 absolute `}>
            <input type="checkbox" />
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="swap-off text-[25px] md:text-4xl text-black bg-[transparent] "
            />
            <RxCross2
              onClick={() => setOpen(!open)}
              className="swap-on text-[25px] md:text-4xl text-black bg-[transparent] "
            />
          </label>
      <div className="min-h-screen bg-[#D1A054] py-8">
        <div className={`title flex flex-col pt-6 pl-7 ${open ? "w-0 hidden" : "w-64"}`}>
          <p className="text-md md:text-2xl font-extrabold">BISTRO BOSS</p>
          <p className="text-[12px] tracking-[7px] font-bold">RESTAURANT</p>
        </div>
        <ul className={`menu ${open ? "w-0 hidden" : "w-64"}`}>
          {isAdmin ? (
            <>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/adminHome"
                >
                  <AiFillHome className="text-[20px] " />
                  Admin Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/addItems"
                >
                  <GiForkKnifeSpoon className="text-[20px] " />
                  Add Items
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/manageItems"
                >
                  <FaList className="text-[20px] " />
                  Manage Items
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/manageBookings"
                >
                  <FaBook className="text-[20px] " />
                  Manage bookings
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/allUsers"
                >
                  <FaUsers className="text-[20px] " />
                  All Users
                </NavLink>
              </li>
               <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/allPaymentsHistory"
                >
                  <MdPayments className="text-[20px] " />
                  All payment history
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/cart"
                >
                  <HiShoppingCart className="text-[20px] " />
                  My cart ({cart.length})
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/userHome"
                >
                  <AiFillHome className="text-[20px] " />
                  User Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/payment"
                >
                  <FaCalendarAlt className="text-[20px] " />
                  Reservation
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/paymentHistory"
                >
                  <MdPayments className="text-[20px] " />
                  payment history
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/cart"
                >
                  <HiShoppingCart className="text-[20px] " />
                  My cart ({cart.length})
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/review"
                >
                  <GiStarsStack className="text-[20px] " />
                  Add Reviews
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/bookings"
                >
                  <FaCalendarCheck className="text-[20px] " />
                  my booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider h-[2px] bg-[#FFFFFF]"></div>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                  : "text-black font-semibold"
              }
              to="/"
            >
              <FaHome className="text-[20px] " />
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                  : "text-black font-semibold"
              }
              to="/menu"
            >
              <FaList className="text-[20px] " />
              Menu
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                  : "text-black font-semibold"
              }
              to="/order/salad"
            >
              <GiShoppingBag className="text-[20px] " />
              Shop
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#FFFFFF] font-semibold bg-[#D1A054]"
                  : "text-black font-semibold"
              }
              to="/contact"
            >
              <MdEmail className="text-[20px] " />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

DashBoard.propTypes = {};

export default DashBoard;
