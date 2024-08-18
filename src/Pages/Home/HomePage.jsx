import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import './HomePage.css'

const HomePage = ({ user }) => {
  return (
    <>
      <NavBar user={user} />
      {/* Contents */}
      <Footer />
    </>
  )
}

export default HomePage
