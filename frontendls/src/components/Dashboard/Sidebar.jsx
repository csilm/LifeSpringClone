import { useState } from 'react';
import {
   AiOutlineUserAdd,
   AiOutlineBars,
   AiOutlineClose,
   AiOutlineLogout,
   AiOutlineSetting,
   AiOutlineHeart,
   AiOutlineStar,
   AiOutlineShoppingCart,

} from 'react-icons/ai';

import { MdOutlineDashboard } from "react-icons/md";
import { BsBook } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../image/30-removebg-preview.png';

const Sidebar = () => {
   const [open, setOpen] = useState(false);

   return (
      <div
         className={
            open
               ? 'shadow space-y-4 pt-4 min-h-screen min-w-[56px]  bg-white z-40'
               : 'shadow space-y-4 pt-4 min-h-screen min-w-[280px]  bg-white z-40'
         }>
         <div className='flex justify-end items-center'>
            {open ? (
               <button
                  onClick={() => setOpen(!open)}
                  className='px-4 block cursor-pointer'>
                  <AiOutlineBars className='text-2xl text-black' />
               </button>
            ) : (
               <div className='flex justify-between'>
                  <Link to="/">
                     <div className='flex justify-center items-center'>
                        <img src={"/img/30-removebg-preview.png"} width='200px' height='100px' alt='' />
                     </div>
                  </Link>

                  <button
                     onClick={() => setOpen(!open)}
                     className='px-4 cursor-pointer'>
                     <AiOutlineClose className='text-3xl text-black' />
                  </button>
               </div>
            )}
         </div>

         {/* menu start here */}

         <div className='space-y-6'>
            <NavLink to='/dashboardActive' className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <MdOutlineDashboard className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  Dashboard
               </li>
            </NavLink>

            <NavLink
               to='profile'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineUserAdd className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  My Profile
               </li>
            </NavLink>

            <NavLink
               to='my-appointment'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <BsBook className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  Enroll Course
               </li>
            </NavLink>

            <NavLink
               to='appointment-list'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineHeart className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  Wishlist
               </li>
            </NavLink>

            <NavLink
               to='appointment-list'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineStar className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  Reviews
               </li>
            </NavLink>

            <NavLink
               to='appointment-list'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineShoppingCart className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  Purchase History
               </li>
            </NavLink>

            <NavLink
               to='appointment-list'
               className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineSetting className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  Settings
               </li>
            </NavLink>

            <button className='flex justify-start items-center space-x-2'>
               <span className='px-4'>
                  <AiOutlineLogout className='text-base text-black' />
               </span>
               <li
                  className={
                     !open
                        ? 'list-none font-medium block text-black'
                        : 'list-none font-medium hidden'
                  }>
                  Logout
               </li>
            </button>
         </div>
      </div>
   );
};

export default Sidebar;
