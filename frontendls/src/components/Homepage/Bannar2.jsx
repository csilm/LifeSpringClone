import React from 'react'
import Slider from "react-slick";
import '../static/css/Homepage/carouselSlider.css'
import bannarImage1 from '../static/img/CarouselImage/Banner2.jpg'
import bannarImage2 from '../static/img/CarouselImage/Banner3.png'
import ExImage1 from '../static/img/HPImage/yahia-amin.jpg'
import ExImage2 from '../static/img/HPImage/sayedul-ashraf.jpg'
import ExImage3 from '../static/img/HPImage/Shusama.jpg'

const Bannar2 = () => {
    const settings = {
        className: "carousel",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='bannerbg'>
            <div className="mx-14">
                <Slider {...settings}>
                    <div className='mx-4'>
                        <div className="grid grid-cols-3">
                            <div className='my-auto ml-28 mr-[-70px]'>
                                <div className='mb-40'>
                                    <h1 className='text-5xl font-serif hOne-Shadow tracking-tight font-bold'>Our Services</h1>
                                </div>

                                <div>
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Book an appointment</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Enroll Course</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Free Mental Health</button><br />
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <img className='bg-transparent' src={bannarImage1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className="grid grid-cols-3">
                            <div className='my-auto ml-28 mr-[-70px]'>
                                <div className='mb-40'>
                                    <h1 className='text-5xl font-serif hOne-Shadow tracking-tight font-bold'>Paitent base</h1>
                                </div>

                                <div>
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Book an appointment</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Enroll Course</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Free Mental Health</button><br />
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <img className='bg-transparent' src={bannarImage2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <div className="grid grid-cols-3">
                            <div className='my-auto ml-28 mr-[-70px]'>
                                <div className='mb-40'>
                                    <h1 className='text-5xl font-serif hOne-Shadow tracking-tight font-bold'>Our Experts</h1>
                                </div>

                                <div>
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Book an appointment</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Enroll Course</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white py-1 rounded-full w-[70%] text-md hover:bg-green-500 hover:text-black uppercase'>Free Mental Health</button><br />
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className="ml-48">
                                    <div className="grid grid-cols-2 gap-20">
                                        <div className="my-auto mx-auto w-56 rounded-lg overflow-hidden">
                                            <img src={ExImage2} alt="" />
                                        </div>
                                        <div className="my-auto mr-6">
                                            <div className='mb-20 mt-20 mr-20 mx-auto w-56 rounded-lg overflow-hidden'>
                                                <img src={ExImage1} alt="" />
                                            </div>
                                            <div className='mb-20 ml-[-50px] w-56 rounded-lg overflow-hidden'>
                                                <img src={ExImage3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Bannar2