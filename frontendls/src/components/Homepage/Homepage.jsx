import React from 'react'
import Courses from './Courses';
import Video from './Video';
import Navbar from '../Navbar/Navbar'
import HPContent from './HPContent'
import ClientsFeedBack from './ClientsFeedBack'
import HealthBlog from './HealthBlog'
import Footer from '../Footer/Footer';
import Bannar2 from './Bannar2';
import AfterBanner from './AfterBanner';
// import Banner from './Banner';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Bannar2 />
      {/* <Banner /> */}
      <AfterBanner />
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