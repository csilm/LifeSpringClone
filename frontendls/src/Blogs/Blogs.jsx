import React from 'react'
import Blog from './Blog'
import BlogData from './BlogData.json'

const Blogs = () => {
  return (
    <div className='lg:px-[10rem] px-10 flex flex-row flex-wrap pb-10'>

    <div className='lg:w-4/6 h-auto w-full lg:pr-10'>
    {
        BlogData.map((items)=> {
            return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
        }
        
        )
      }
    </div>
    <div className='lg:w-2/6 h-auto w-full flex flex-col flex-wrap mt-[2rem] px-5'>
       <div className='w-full flex flex-col justify-start items-start pt-10 flex-wrap'>
        <h1 className='text-lg font-semibold text-slate-600 '>Search</h1>
        <div className='w-full bg-slate-200 h-[.1rem] mt-2 '></div>
        <div className='w-full '><input className='w-full border-2 mt-5 p-2 bg-slate-100 rounded-md' type="text" placeholder='Search....' /> </div>

        </div> 
       <div className='w-full flex flex-col justify-start items-start pt-5 flex-wrap'>
       <h1 className='text-lg font-semibold text-slate-600 '>Categories</h1>
        <div className='w-full bg-slate-200 h-[.1rem] mt-2 mb-3'></div>
        <div className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Child Psychiatrists in Dhaka</h1> <h1>({5})</h1></div>
        <div className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Differences Between A Psychiatrist And A Therapist</h1> <h1>({5})</h1></div>
        <div className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Female Psychiatrists</h1> <h1>({5})</h1></div>
        <div className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>LifeSpring</h1> <h1>({5})</h1></div>
        <div className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Mental Health</h1> <h1>({5})</h1></div>
        <div className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Psychiatrist in Dhaka</h1> <h1>({5})</h1></div>
        <div className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Psychologists in Dhaka</h1> <h1>({5})</h1></div>
       </div>
       <div className='w-full flex flex-col justify-start items-start pt-5 flex-wrap'>
       <h1 className='text-lg font-semibold text-slate-600 '>Popular Tags</h1>
        <div className='w-full bg-slate-200 h-[.1rem] mt-2 mb-3'></div>
        <div className='w-full flex flex-row flex-wrap '>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best Mental Health Counsellors</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best Psychologists in Bangladesh</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best psychologists in Dhaka city</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Development Center</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Psychiatrist in Dhaka</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Psychiatrists in Dhaka</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Clinical Psychologists</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Clinical Psychologists & Therapists</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Corporate mental health Bangladesh</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Counselling Psychologists in Dhaka</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Difference Between a Therapist</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Differences Between A Psychiatrist And A Therapist</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Different Types of Psychiatrists</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Female Psychiatrists in Dhaka</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Female Psychologists in Bangladesh</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>How to Become A Psychiatrist</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>mental healthcare services</div>
           <div className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Mental Health in Bangladesh</div>
        </div>
       </div>
    </div>
      
    </div>
  )
}

export default Blogs
