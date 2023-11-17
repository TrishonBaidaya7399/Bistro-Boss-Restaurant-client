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
import { GiStarsStack, GiShoppingBag, GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const DashBoard = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //get admin from database
  const [isAdmin] = useAdmin();
  refetch();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054] py-8">
        <div className="title flex flex-col pl-7">
          <p className="text-md md:text-2xl font-extrabold">BISTRO BOSS</p>
          <p className="text-[12px] tracking-[7px] font-bold">RESTAURANT</p>
        </div>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/allUsers"
                >
                  <FaUsers className="text-[20px] " />
                  All Users ({users.length})
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/reservation"
                >
                  <FaCalendarAlt className="text-[20px] " />
                  Reservation
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold"
                      : "text-black font-semibold"
                  }
                  to="/dashboard/payment"
                >
                  <MdPayments className="text-[20px] " />
                  payment history
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
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
                      ? "text-[#FFFFFF] font-semibold"
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
                  ? "text-[#FFFFFF] font-semibold"
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
                  ? "text-[#FFFFFF] font-semibold"
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
                  ? "text-[#FFFFFF] font-semibold"
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
                  ? "text-[#FFFFFF] font-semibold"
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
