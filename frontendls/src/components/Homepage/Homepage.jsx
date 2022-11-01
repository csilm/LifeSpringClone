import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HPContent from './HPContent'
import ClientsFeedBack from './ClientsFeedBack'
import HealthBlog from './HealthBlog'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HPContent/>
      <ClientsFeedBack/>
      <HealthBlog/>
      <Footer/>
    </div>
  )
}

export default Homepage