import React from 'react'
import './style.css'


const SmallScreen = () => {
  return (
    
    <div className='block z-10 lg:hidden duration-1000 w-[18rem] absolute right-0 top-[8.5rem] bg-slate-500 justify-end'>
  

              <ul className="w-full duration-500">
               <li className="dropdown text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5">
                  <button href = {"/allProffesionals"} className=' w-1/2 flex flex-col justify-start items-start px-5'>Professionals <div className='ub'></div></button>
                   <div className="dropdown-menu hidden h-auto duration-75 pt-4">
                       <ul className="block w-[20rem] rounded-sm py-2 ">
                           <li className=" flex justify-start items-start px-5 py-2.5"><a href={'/allProffesionals'} className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">All Department</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Psychiatris</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Psychologist</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Counselor</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Child and Adolescent</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Dermatologist</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Sexual Health</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Gynechologist</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Internal Medicine</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Development Therapist</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">ENT</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Nutritionist</a></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><a className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Paediatrics</a></li>  
                       </ul>
                       
                   </div>
                  
               </li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className="dropdown tran text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5">
                  <button className=' w-1/3 flex justify-start flex-col items-start px-5'><a href={"/listOfServices"}> Services </a><div className='ub'></div></button>
                   <div className="dropdown-menu hidden h-auto trans pt-4">
                       <ul className="block w-[20rem] mt-0 rounded-sm py-2 justify-center items-center">
                           <li className="flex justify-start items-start px-5 py-2.5"><a href={'/psychologicalCounseling'} className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Psychological Counseling</a></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><a href={'/corporateService'} className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Corporate Service</a></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><a href={'/childDevelopment'} className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Child Developement</a></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><a href={'/mentalHealthTest'} className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Free Mental health Test</a></li>
                       </ul>
                   </div>
               </li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className=" flex justify-start items-start px-5 text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5 "><button className='btn'>Courses<div className='ub1'></div></button></li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className=" flex justify-start items-start px-5 text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5 "><button className='btn'>Blogs<div className='ub1'></div></button></li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className="dropdown text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5">
                <button className=' flex w-1/2 justify-start flex-col items-start px-5'>Testimonials<div className='ub'></div></button>
                   <div className="dropdown-menu hidden duration-1000 h-auto pt-4">
                       <ul className="block w-[20rem] rounded-sm  py-2 justify-start items-start">
                           <li className="flex justify-start items-start px-5 py-2.5"><a className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Clients Feedback</a></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><a className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Purify Class Review</a></li>
                       </ul>
                   </div>
                 </li>
                 
               </ul>
    </div>
  )
}

export default SmallScreen
