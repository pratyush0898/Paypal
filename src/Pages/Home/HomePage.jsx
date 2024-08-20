import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import './HomePage.css'

const HomePage = ({ user, Login, Logout, amount }) => {
  return (
    <>
      <NavBar amount={amount} Login={Login} Logout={Logout} user={user} />
      {/* Contents */}
      <Footer />
    </>
  )
}

export default HomePage
