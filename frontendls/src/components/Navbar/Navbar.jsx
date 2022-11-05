import React from 'react'
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import './style.css'
import { Rotate as Hamburger } from 'hamburger-react'
import SmallScreen from './SmallScreen'
import { useState } from 'react'
import Logo from '../static/img/lifespring-footer-logo.png'
// import { IoIosArrowDown } from 'react-icons/io'




const Navbar = () => {
    const [color, setColor] = useState(false)
    const ChangeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', ChangeColor)
    const [click, setClick] = useState(false);
    return (
        <div className={color ? 'navDropFromUpAnim w-full z-10 h-auto flex justify-center items-center flex-wrap flex-col fixed top-0 ' : 'w-full h-auto flex justify-center items-center flex-wrap flex-col'}>
            <div className='w-full h-auto flex justify-center items-center flex-wrap p-2 ' style={{backgroundColor : "#1C6732"}}>
                <div className='lg:w-1/2 w-full flex justify-center items-center flex-row flex-wrap lg:p-0 p-[.1rem]'>
                    <div className='ttext cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 bder flex flex-row justify-center items-center'><AiFillPhone /> +8809638 505 505 </div>
                    <div className='ttext cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 bder'>+8801763 438 148  </div>
                    <div className='ttext cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 flex flex-row justify-center items-center'><AiOutlineMail className='font-bold mx-1' />Email</div>
                </div>
                <div className='lg:w-1/2 w-full flex justify-center items-center flex-row flex-wrap lg:p-0 p-[.1rem]'>
                    <div className='text-sm text-white cursor-pointer hover:text-yellow-400 trns font-semibold px-2 bder'>Log in </div>
                    <div className='text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 bder'>Register</div>
                    <div className='text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 '><a className='' target="blank" href={'https://www.facebook.com/lifespringinstitute/'}> <BsFacebook /> </a></div>
                    <div className='text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 '><a className='' target="blank" href={'https://www.youtube.com/channel/UCIhnNMshTmGQmkJaBLGe5aw'}> <BsYoutube /> </a></div>
                    <div className='text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 '><a className='' target="blank" href={'https://www.instagram.com/lifespringinstitute/'}> <BsInstagram /> </a></div>
                    <div className='text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 '><a className='' target="blank" href={"https://www.linkedin.com/company/lifespring/"}> <FaLinkedinIn /> </a></div>

                </div>
            </div>




            <div className={color ? 'w-full h-[5rem] bg-white' : 'w-full h-[5rem] bg-transparent'}>
                <div className=' w-full flex flex-row justify-between items-center p-2'>
                    <div className=' lg:w-1/5 h-4/5 lg:pl-28 flex flex-row'>
                        <img className='w-[11rem]' src={Logo} alt="" />
                    </div>
                    <div className='lg:hidden block trans'>

                        <Hamburger toggled={click} toggle={setClick} />
                        {
                            click === true && <SmallScreen />
                        }


                    </div>

                    <div className=' lg:block hidden w-4/5 pl-[18rem] flex-row justify-end items-center py-2'>

                        <div>
                            <ul className="w-full">
                                <li className="dropdown inline px-4 text-black hover:text-blue-700 cursor-pointer font-semibold text-base tracking-wide">
                                    <button className='btn'> Professionals <div className='ub'></div></button>
                                    <div className="dropdown-menu z-10 absolute hidden  h-auto  pt-4">
                                        <ul className="block w-[17rem] ml-[5rem] sty bg-white px-10 shadow-lg rounded-sm py-2 justify-start items-start">
                                            <li className=" py-2.5"><a href={"/allProffesionals"} className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">All Department</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Psychiatris</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Psychologist</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Counselor</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Child and Adolescent</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Dermatologist</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Sexual Health</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Gynechologist</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Internal Medicine</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Development Therapist</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">ENT</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Nutritionist</a></li>
                                            <li className=" py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Paediatrics</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="dropdown inline px-4 text-black hover:text-blue-700 cursor-pointer font-semibold text-base tracking-wide">
                                    <button className='btn'> <a href={"/listOfServices"}> Services </a> <div className='ub'></div></button>
                                    <div className="dropdown-menu z-10 absolute hidden h-auto pt-4">
                                        <ul className="block w-[17rem] mt-0 sty bg-white px-10 shadow-lg rounded-sm py-2 justify-start items-start ml-[12rem]">
                                            <li className="py-2.5"><a href={'/psychologicalCounseling'} className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Psychological Counseling</a></li>
                                            <li className="py-2.5"><a href={'/corporateService'} className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Corporate Service</a></li>
                                            <li className="py-2.5"><a href={'/childDevelopment'} className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Child Developement</a></li>
                                            <li className="py-2.5"><a href={'/mentalHealthTest'} className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Free Mental health Test</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="inline px-4 text-black hover:text-blue-600 cursor-pointer font-semibold text-base tracking-wide"><button className='btn'>Courses<div className='ub1'></div></button></li>
                                <li className="inline px-4 text-black hover:text-blue-600 cursor-pointer font-semibold text-base tracking-wide"><button className='btn'>Blogs<div className='ub1'></div></button></li>
                                <li className="dropdown inline px-4 text-black hover:text-blue-700 cursor-pointer font-semibold text-base tracking-wide">
                                    <button className='btn'>Testimonials<div className='ub'></div></button>
                                    <div className="dropdown-menu absolute hidden h-auto pt-4">
                                        <ul className="block w-[17rem] mt-0 sty bg-white px-10 shadow-lg rounded-sm  py-2 justify-start items-start ml-[27rem]">
                                            <li className="py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Clients Feedback</a></li>
                                            <li className="py-2.5"><a className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">Purify Class Review</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>



            </div>



        </div>
    )
}

export default Navbar
