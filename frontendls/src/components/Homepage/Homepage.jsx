import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HPContent from '../Homepage/HPContent'
import Prof from '../Proff/Info.json'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Prof />
      <Footer/>
    </div>
  )
}

export default Homepage