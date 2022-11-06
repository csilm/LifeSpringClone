import { Dropdown, Label, Select, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
              <div className='bg-black h-screen'>
            <h1 className='text-white text-left text-3xl p-10'>Back</h1>
            <div className='flex justify-center items-center w-3/3'>
                <div>
                    <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/11/lifespring-footer-logo.png" alt="" />
                    
<form className='mt-5 w-96'>
 
    <div class="mb-3 ">
    <label for="name" className="block font-medium text-white dark:text-gray-300 text-left text-md">First Name</label>
        <input style={{borderBottom:"2px solid white",}} type="text" id="text" className="w-full bg-black text-white border-none focus:ring-black mb-5"  required=""/>
        </div>
   

        <div id="select"  className='bg-black mb-5 flex justify-center items-center'>
  <Select style={{background:"black",padding:"20px",color:"white",width:"80px"}} className='bg-black text-lg'
    required={true}
  >
    <option className='bg-black text-white p-3'>
      +880
    </option>
    <option className='bg-black text-white p-3'>
      +39
    </option>
    <option className='bg-black text-white p-3'>
      +49
    </option>
    <option className='bg-black text-white p-3'>
      +99
    </option>
  </Select>
  <div class="mb-3 w-96 ">
        <label for="email" className="block mb-2  font-medium text-white dark:text-gray-300 text-left text-md">Mobile no</label>
        <input style={{borderBottom:"2px solid white",}} type="email" id="email" className="w-full bg-black text-white border-none focus:ring-black"  required=""/>
        </div>
</div>

    
    <div class="mb-3">
        <label for="password" className="block mb-2  font-medium text-white dark:text-gray-300 text-left text-md">Password</label>
        <input style={{borderBottom:"2px solid white",}} type="password" id="password" className="w-full bg-black text-white border-none focus:ring-black" required=""/>
    </div> 
  
    <button style={{width:"50vh"}} type="submit" className="text-black bg-white hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-2 py-3 text-center transition-all duration-300 ease-in-out ">SIGNUP</button>
</form>
<Link to="/login"><p className='text-center text-md text-white'>Back to LOGIN</p></Link>


                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;