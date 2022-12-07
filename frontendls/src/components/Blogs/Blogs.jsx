import React from 'react'
import Blog from './Blog'
import BlogData from './BlogData.json'
import { useState } from 'react'
import DetailsPage from './DetailsPage'
import Fulldata from './Fulldata.json'

const Blogs = () => {
  var count1=0;
  var count2=0;
  var count3=0;
  var count4=0;
  var count5=0;
  var count6=0;
  const [ click , setclick] = useState("All")
  return (
    <div className='lg:px-[10rem] px-10 flex flex-row flex-wrap pb-10'>
    <div className='w-full bg-slate-100 absolute left-0 px-20 py-5 font-semibold text-slate-500 text-sm'>
      <span>Home</span> / <span> Blogs </span> / <span>{click}</span>
    </div>
    <div className='lg:w-4/6 h-auto w-full lg:pr-10 pt-10'>
      {click === 'All' &&
          BlogData.map((items) => {
            if (items.tag1 === 'child') {count1++;}
            else if (items.tag1 === 'mental') {count2++;}
            else if (items.tag1 === 'diff') {count3++;}
            else if (items.tag1 === 'psychiatrist') {count4++;}
            else if (items.tag1 === 'psychologist') {count5++;}
            else if (items.tag1 === 'Lifspring') {count6++;}
            return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
          })
        }
        {click === 'child' &&
          BlogData.map((items) => {
            if (items.tag1 === 'child') {
              count1++;
              return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
            }
            return null
          })
        }
        {click === 'mental' &&
          BlogData.map((items) => {
            if (items.tag1 === 'mental') {
              count2++;
              return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
            }
            return null
          })
        }
        {click === 'diff' &&
          BlogData.map((items) => {
            if (items.tag1 === 'diff') {
              count3++;
              return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
            }
            return null
          })
        }
        {click === 'psychiatrist' &&
          BlogData.map((items) => {
            if (items.tag1 === 'psychiatrist') {
              count4++;
              return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
            }
            return null
          })
        }
        {click === 'psychologist' &&
          BlogData.map((items) => {
            if (items.tag1 === 'psychologist') {
              count5++;
              return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
            }
            return null
          })
        }
        {click === 'Lifspring' &&
          BlogData.map((items) => {
            if (items.tag1 === 'Lifspring') {
              count6++;
              return <Blog img={items.img} title={items.title} details={items.details} date={items.date} viwes={items.viwes} tag1={items.tag1} />
            }
            return null
          })
        }
        {click === 1 &&
          Fulldata.map((items) => {
            if (items.id === 1) {
              return <DetailsPage t_img={items.t_img} pname={items.pname}  title={items.title}  date={items.date} count={items.count} cont1={items.cont1} cont2={items.cont2} cont4={items.cont4} cont3={items.cont3} img1={items.img1} img2={items.img2} img3={items.img3} />
            }
            return null
          })
        }
    </div>
    <div className='lg:w-2/6 h-auto w-full flex flex-col flex-wrap mt-[2rem] px-5 pt-10'>
       <div className='w-full flex flex-col justify-start items-start pt-10 flex-wrap'>
        <h1 className='text-lg font-semibold text-slate-600 '>Search</h1>
        <div className='w-full bg-slate-200 h-[.1rem] mt-2 '></div>
        <div className='w-full '><input onKeyPress={(e)=>setclick(e.target.value)} className='w-full border-2 mt-5 p-2 bg-slate-100 rounded-md' type="text" placeholder='Search....' /> </div>

        </div> 
       <div className='w-full flex flex-col justify-start items-start pt-5 flex-wrap'>
       <h1 className='text-lg font-semibold text-slate-600 '>Categories</h1>
        <div className='w-full bg-slate-200 h-[.1rem] mt-2 mb-3'></div>
        <div onClick={()=>{setclick("child")}} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Child Psychiatrists in Dhaka</h1> <h1>({count1})</h1></div>
        <div onClick={()=>{setclick("diff")}} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Differences Between A Psychiatrist And A Therapist</h1> <h1>({count3})</h1></div>
        <div onClick={()=>{setclick("")}} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Female Psychiatrists</h1> <h1>({5})</h1></div>
        <div onClick={()=>{setclick("Lifspring")}} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>LifeSpring</h1> <h1>({count6})</h1></div>
        <div onClick={()=>{setclick("mental")}} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Mental Health</h1> <h1>({count2})</h1></div>
        <div onClick={()=>{setclick("psychiatrist")}} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Psychiatrist in Dhaka</h1> <h1>({count4})</h1></div>
        <div onClick={()=>{setclick("psychologist")}} className='w-full flex justify-between py-3 text-slate-500 hover:text-lime-500 cursor-pointer'><h1>Psychologists in Dhaka</h1> <h1>({count5})</h1></div>
       </div>
       <div className='w-full flex flex-col justify-start items-start pt-5 flex-wrap'>
       <h1 className='text-lg font-semibold text-slate-600 '>Popular Tags</h1>
        <div className='w-full bg-slate-200 h-[.1rem] mt-2 mb-3'></div>
        <div className='w-full flex flex-row flex-wrap '>
           <div onClick={()=>{setclick("mental")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best Mental Health Counsellors</div>
           <div onClick={()=>{setclick("psychologist")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best Psychologists in Bangladesh</div>
           <div onClick={()=>{setclick("psychologist")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Best psychologists in Dhaka city</div>
           <div onClick={()=>{setclick("child")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Development Center</div>
           <div onClick={()=>{setclick("child")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Psychiatrist in Dhaka</div>
           <div onClick={()=>{setclick("child")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Child Psychiatrists in Dhaka</div>
           <div onClick={()=>{setclick("psychologist")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Clinical Psychologists</div>
           <div onClick={()=>{setclick("psychologist")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Clinical Psychologists & Therapists</div>
           <div onClick={()=>{setclick("mental")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Corporate mental health Bangladesh</div>
           <div onClick={()=>{setclick("psychologist")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Counselling Psychologists in Dhaka</div>
           <div onClick={()=>{setclick("diff")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Difference Between a Therapist</div>
           <div onClick={()=>{setclick("diff")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Differences Between A Psychiatrist And A Therapist</div>
           <div onClick={()=>{setclick("diff")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Different Types of Psychiatrists</div>
           <div onClick={()=>{setclick("female")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Female Psychiatrists in Dhaka</div>
           <div onClick={()=>{setclick("female")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Female Psychologists in Bangladesh</div>
           <div onClick={()=>{setclick("psychiatrist")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>How to Become A Psychiatrist</div>
           <div onClick={()=>{setclick("mental")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>mental healthcare services</div>
           <div onClick={()=>{setclick("mental")}} className='bg-slate-100 text-sm text-slate-400 px-7 p-2 font-semibold rounded-md m-1 cursor-pointer hover:bg-lime-500 hover:text-white duration-500'>Mental Health in Bangladesh</div>
        </div>
       </div>
    </div>
      
    </div>
  )
}

export default Blogs
