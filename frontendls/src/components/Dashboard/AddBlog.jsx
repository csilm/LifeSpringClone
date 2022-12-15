import React from 'react'
import DashboardHeader from './DashboardHeader'

const AddBlog = () => {
  return (
     <div className="space-y-6 mt-12">
     <DashboardHeader />

     <div className="bg-[#F8F8F8] h-screen">
       <div className="space-y-4 mt-6 ">
         <h3 className="capitalize font-extrabold text-2xl text-left pl-8">
         Blogs
         </h3>
         <div className="bg-white mx-8">
           <p className="text-[#ABABAB] text-start p-5">
             You haven't given any Blogs.
           </p>
         </div>
       </div>
     </div>
   </div>
  )
}

export default AddBlog