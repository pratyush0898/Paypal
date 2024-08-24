import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Transition from '../../Components/Transition/Transition'
import ScanPay from '../../Components/SacnPay/ScanPay'
import Bills from '../../Components/Bills/Bills'
import Invite from '../../Components/Invite/Invite'
import './DashBord.css'

const Dashbord = ({ user, Logout , amount, Addamount }) => {
  return (
    <>
      <NavBar amount={amount} Logout={Logout} user={user} />
      <Transition />
      <ScanPay />
      <Bills Addamount={Addamount} />
      <Invite />
    </>
  )
}

export default Dashbord
