import Select from 'react-select';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  let navigate= useNavigate();
  const options = [
    {value : "+880",label: "+880"} 
  ]
  const handleChange = (selectOption) => {
    console.log(selectOption);
  }
  const colorStyles = {
    control : (styles) =>({...styles,
      background: "#050210", 
      color: "white", 
      border : "none" , 
      
      width: "100px",
      height: "50px",
      borderRight : "1px solid",
      // This line disable the blue border
      boxShadow: 'none'
    })
  }
  return (
    <div className='bg-[#050210]'>
      <h1 onClick={() => navigate(-1)} className='text-white text-left text-xl pl-10 py-5'>BACK</h1>
      <div className='flex justify-center items-center w-3/3'>
        <div>
          <div>
            <img className='m-auto' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/11/lifespring-footer-logo.png" alt="" />
          </div>
          <div>
            <form className='mt-10'>
              <div class="mb-4">
                <label for="name" className="block font-medium text-white dark:text-gray-300 text-left text-md">First Name</label>
                <input style={{ borderBottom: "2px solid white", }} type="text" id="text" className="w-full bg-transparent text-white border-0 focus:outline-none focus:ring-0" required={true} />
              </div>

              <label for="PhoneNumber" className="block mb-2  font-medium text-white dark:text-gray-300 text-left text-md">Mobile no</label>
              <div id="select" style={{ borderBottom: "2px solid white" }} className='bg-transparent mb-5 flex justify-center items-center'>

                <Select
                placeholder
                options = {options} 
                onChange = {handleChange} 
                id='PhoneNumber' 
                styles={colorStyles} 
                className='p-1 text-lg border-0 focus:outline-none focus:ring-0' 
                required={true}
                components={{ 
                  DropdownIndicator:() => null, 
                  IndicatorSeparator:() => null }}
                />

                <div>
                  <input type="text" id="PhoneNumber" className="w-full p-1 bg-transparent text-white border-0 focus:outline-none focus:ring-0" required />
                </div>
              </div>
              {/* <div class="mb-4">
                <label for='cellNum' className="block font-medium text-white dark:text-gray-300 text-left text-md">Mobile Number</label>
                <div id="select" style={{ borderBottom: "2px solid white" }} className='bg-transparent mb-5 flex justify-center items-center'>
                  <div className="rounded-lg overflow-hidden">
                    <input type="text" style={{ background: "#050210", color: "white", border: "none", borderRight: "1px solid" }} name="cellNum" list="cellNum" className='p-1 text-lg border-0 focus:outline-none focus:ring-0' />
                    <datalist id="productName">
                      <option value="Pen">Pen</option>
                      <option value="Pen">Pen</option>
                      <option value="Pen">Pen</option>
                    </datalist>
                  </div>
                  <div>
                    <input type="text" id="cellNum" list='PhoneNummber' className="w-full p-1 bg-transparent text-white border-0 focus:outline-none focus:ring-0" required />
                  </div>
                </div>

              </div> */}
              <div class="mb-4">
                <label className="block font-medium text-white dark:text-gray-300 text-left text-md">Email</label>
                <input style={{ borderBottom: "2px solid white", }} type="email" id="email" className="w-full bg-transparent text-white border-0 focus:outline-none focus:ring-0" required="" />
              </div>

              <div class="mb-4">
                <label for="password" className="block font-medium text-white dark:text-gray-300 text-left text-md">Password</label>
                <input style={{ borderBottom: "2px solid white", }} type="password" id="password" className="w-full bg-transparent text-white border-0 focus:outline-none focus:ring-0" required="" />
              </div>

              <button style={{ width: "50vh" }} type="submit" className="text-black bg-white hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl px-2 py-3 text-center transition-all duration-300 ease-in-out ">SIGN UP</button>
            </form>
            <Link to="/login"><p className='text-center text-md text-white my-3'>Back to LOG IN</p></Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signup;