import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-black h-screen'>
            <h1 className='text-white text-left text-3xl p-10'>Back</h1>
            <div className='flex justify-center items-center w-3/3'>
                <div>
                    <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/11/lifespring-footer-logo.png" alt="" />
                    
<form className='mt-10 w-96'>
 
    <div class="mb-6 ">
        <label for="email" className="block mb-2  font-medium text-white dark:text-gray-300 text-left text-md">Email/Mobile no</label>
        <input style={{borderBottom:"2px solid white",}} type="email" id="email" className="w-full bg-black text-white border-none focus:ring-black"  required=""/>
    </div> 
    <div class="mb-6">
        <label for="password" className="block mb-2  font-medium text-white dark:text-gray-300 text-left text-md">Password</label>
        <input style={{borderBottom:"2px solid white",}} type="password" id="password" className="w-full bg-black text-white border-none focus:ring-black" required=""/>
    </div> 
   
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-white dark:text-gray-400">Remember Me</label>
    </div>
    <button style={{width:"50vh"}} type="submit" className="text-black bg-white hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-2 py-3 text-center transition-all duration-300 ease-in-out ">LOGIN</button>
</form>
<p className='text-sm text-center text-white mt-2'>Forgot your password ?</p>

<div className='mt-10'>
    <p className='text-left text-white'>Don't Have an account?</p>
    <Link to="/signup">
    <button style={{width:"50vh"}} className="text-white mt-2 bg-none hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-2 py-3 text-center transition-all duration-300 ease-in-out border border-white ">SIGNUP</button>
    </Link>
</div>
                </div>
            </div>
        </div>
    );
};

export default Login;