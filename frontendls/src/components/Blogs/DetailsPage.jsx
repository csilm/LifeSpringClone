import React from 'react'

const DetailsPage = ({t_img,date,pname,count,title,cont1,cont2,cont3,cont4,img1,img2,img3}) => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center'>
      <div className='w-full'>
         <img className='w-full pt-10 rounded-lg' src={t_img} alt="" />
      </div>
      <div className='w-full h-auto flex flex-row justify-around py-5 text-sm font-semibold text-slate-500 items-center'>
        <div>
            <img src="" alt="" />{pname}
        </div>
        <div>{date}</div>
        <div>{count} views</div>
        <div>Comment</div>
      </div>

      <div className='w-full py-5 text-2xl text-slate-600 font-semibold'>{title}</div>

      <div className='py-5 w-full text-xl leading-10 text-slate-500'>{cont1}</div>
      <div className='py-5 w-full text-xl leading-10 text-slate-500'><img className='w-full' src={img1} alt="" /></div>
      <div className='py-5 w-full text-xl leading-10 text-slate-500'>{cont2}</div>
      <div className='py-5 w-full text-xl leading-10 text-slate-500'><img className='w-full'  src={img2} alt="" /></div>
      <div className='py-5 w-full text-xl leading-10 text-slate-500'>{cont3}</div>
      <div className='py-5 w-full text-xl leading-10 text-slate-500'><img className='w-full'  src={img3} alt="" /></div>
      <div className='py-5 w-full text-xl leading-10 text-slate-500'>{cont4}</div>

      <div className='w-full text-2xl font-semibold'>
        Related Posts
      </div>
      <div className='w-full flex flex-wrap justify-around py-5'>
        <h1 className='w-full text-2xl text-slate-800 font-semibold'>Leave your thought here</h1>
        <p className='w-full text-lg text-slate-500 py-3 font-semibold'>Your email address will not be published. Required fields are marked *</p>
        <input className='bg-slate-100 my-2 mx-3 p-3 w-[22rem] h-auto' type="text" name="" placeholder='Your Name*' id="" />
        <input className='bg-slate-100 my-2 mx-3 p-3 w-[22rem] h-auto' type="text" name="" placeholder='Your Email*' id="" />
        <input className='bg-slate-100 my-2 mx-3 p-3 h-[8rem] w-full h-auto' type="text" name="" placeholder='Your Comment' id="" />
        <div className='w-full px-5'><input className='px-3 mx-3' type="checkbox" name="" id="" />Save my name, email, and website in this browser for the next time I comment.</div>
        <div className='w-full p-5'> <button className='bg-green-700 px-7 text-white rounded-md py-3 hover:bg-lime-500 duration-500'>Submit</button></div>
      </div>
      
    </div>
  )
}

export default DetailsPage
