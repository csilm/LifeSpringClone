import React from 'react'

const Blog = ({title,details,date,img,tag1,viwes}) => {
  return (
    <div className='w-full h-auto flex flex-wrap justify-center items-center my-20'>
      <div className='rounded-md overflow-hidden lg:w-[15rem] mr-2 w-full h-auto flex flex-wrap'>
         <img className='hover:scale-110 ease-in-out duration-500 lg:w-[15rem] w-full rounded-md' src={img} alt="" />
      </div>
      <div className='pl-1 lg:w-2/3 w-full h-auto flex flex-wrap flex-col justify-start'>
        <div className='w-full h-auto text-xl font-bold py-1 hover:text-lime-500 duration-500 cursor-pointer'>{title}</div>
        <div className='w-full h-auto flex flex-row justify-start py-2 font-semibold text-slate-500'>
          <div className='pr-5'>{date}</div>
          <div className='pl-5'>{viwes} Views</div>
        </div>
        <div className='w-full h-auto text-md font-semibold text-slate-500 py-2 '>{details}</div>
        <div className='w-full h-auto text-sm font-semibold text-lime-400 cursor-pointer'>Read more - </div>
      </div>
      <div className='w-full bg-slate-200 h-[.1rem] mt-10 '></div>
    </div>
  )
}

export default Blog
