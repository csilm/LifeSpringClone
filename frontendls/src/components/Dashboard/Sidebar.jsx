import { useState } from "react";
import {
  AiOutlineUserAdd,
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { MdOutlineDashboard } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
// import logo from '../image/30-removebg-preview.png';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        open
          ? "shadow space-y-4 pt-4 min-h-screen min-w-[56px]  bg-white z-40"
          : "shadow space-y-4 pt-4 min-h-screen min-w-[280px]  bg-white z-40"
      }
    >
      <div className="flex justify-end items-center">
        {open ? (
          <button
            onClick={() => setOpen(!open)}
            className="px-4 block cursor-pointer"
          >
            <AiOutlineBars className="text-2xl text-black" />
          </button>
        ) : (
          <div className="flex justify-between">
            <Link to="/">
              <div className="flex justify-center items-center">
                <img
                  src={"/img/30-removebg-preview.png"}
                  width="200px"
                  height="100px"
                  alt=""
                />
              </div>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="px-4 cursor-pointer"
            >
              <AiOutlineClose className="text-3xl text-black" />
            </button>
          </div>
        )}
      </div>

      {/* menu start here */}

      <div className="ml-6">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <MdOutlineDashboard className="text-base" />
          <span className="ml-3">Dashboard</span>
        </NavLink>

        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 font-semibold"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <AiOutlineUserAdd className="text-base" />
          <span className="ml-3">My Profile</span>
        </NavLink>

        <NavLink
          to="enrolled-courses"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 font-semibold"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <BsBook className="text-base" />
          <span className="ml-3">Enroll Course</span>
        </NavLink>

        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 font-semibold"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <AiOutlineHeart className="text-base" />
          <span className="ml-3">Wishlist</span>
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 font-semibold"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <AiOutlineStar className="text-base" />
          <span className="ml-3">Reviews</span>
        </NavLink>

        <NavLink
          to="purchase-history"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 font-semibold"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <AiOutlineShoppingCart className="text-base" />
          <span className="ml-3">Purchase History</span>
        </NavLink>

        <hr />

        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 font-semibold"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <AiOutlineSetting className="text-base" />
          <span className="ml-3">Settings</span>
        </NavLink>

        <button className="text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] w-full">
          <AiOutlineLogout className="text-base text-[#99CC33]" />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
