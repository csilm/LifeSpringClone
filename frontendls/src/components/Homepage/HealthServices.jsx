import React from 'react';

import { FaArrowRight} from "react-icons/fa";
const HealthServices = () => {
    return (
        <div className='mt-10'>
           <h1 className='text-4xl text-left mb-10 font-bold'>Health <span className='text-green-700'>Services</span></h1> 
           <div className='flex justify-center items-center'>
            <div className=' h-92 rounded-md shadow-lg shadow-gray-400'>
                <img className='p-5' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/a.png" alt="" />
                <h2 className='text-2xl font-semibold p-5'>Physcological Counseling</h2>
                <button style={{color:"#9c3",borderTop:"1px solid gray"}} className="border-x-2 mt-10 text-md font-bold hover:bg-green-700 hover:origin-top transition-all ease-in-out duration-500 p-5 w-full flex justify-center items-center">Learn More<span className='ml-2 mt-1'><FaArrowRight/></span> </button>
            </div>
            <div className=' h-92 rounded-md ml-10 shadow-lg shadow-gray-400'>
                <img className='p-5' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/b.png" alt="" />
                <h2 className='text-2xl font-semibold p-5'>Corporate Services</h2>
                <button style={{color:"#9c3",borderTop:"1px solid gray",marginTop:"20px"}} className="border-x-2 mt-10 text-md font-bold hover:bg-green-700 hover:origin-top transition-all duration-500 p-5 w-full flex justify-center items-center">Learn More<span className='ml-2 mt-1'><FaArrowRight/></span> </button>
                </div>
            <div className=' h-92 rounded-md ml-10 shadow-lg shadow-gray-400'>
                <img className='p-5' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/c.png" alt="" />
                <h2 className='text-2xl font-semibold p-5'>Child development</h2>
                <button style={{color:"#9c3",borderTop:"1px solid gray"}} className="border-x-2 mt-10 text-md font-bold hover:bg-green-700 hover:origin-top transition-all duration-500 p-5 w-full flex justify-center items-center">Learn More<span className='ml-2 mt-1'><FaArrowRight/></span> </button>
            </div>
           </div>
        </div>
    );
};

export default HealthServices;