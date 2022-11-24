import React from 'react'
// import Courses from './Courses';
import Video from './Video';
import Navbar from '../Navbar/Navbar'
import HPContent from './HPContent'
import ClientsFeedBack from './ClientsFeedBack'
import HealthBlog from './HealthBlog'
import Footer from '../Footer/Footer';
import Bannar2 from './Bannar2';
import AfterBanner from './AfterBanner';
import HCourses from './HCourses';
// import Banner from './Banner';
import OurClients from './OurClients'
import HealthServices from './HealthServices'
import GotoTopBtn from '../GotoTopBtn/GotoTopBtn';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Bannar2 />
      {/* <Banner /> */}
      <AfterBanner />
      {/* <Courses /> */}
      <HCourses />
      <HPContent/>
      <OurClients />
      <HealthServices />
      <ClientsFeedBack/>
      <HealthBlog/>
      <Video/>
      <GotoTopBtn/>
      <Footer/>
    </div>
  )
}
export default Homepage