import React from 'react'
import Courses from './Courses';
import Video from './Video';
import Navbar from '../Navbar/Navbar'
import HPContent from './HPContent'
import ClientsFeedBack from './ClientsFeedBack'
import HealthBlog from './HealthBlog'
import Banner from '../Homepage/Banner';
import Footer from '../Footer/Footer';
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Courses />
      <HPContent/>
      <ClientsFeedBack/>
      <HealthBlog/>
      <Video/>
      <Footer/>
    </div>
  )
}
export default Homepage