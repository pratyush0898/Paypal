  import React from 'react'
  import './DashBord.css'
  import NavBar from '../../Components/NavBar/NavBar'
  import Transition from '../../Components/Transition/Transition'
  import ScanPay from '../../Components/SacnPay/ScanPay'
  import Bills from '../../Components/Bills/Bills'
  import Invite from '../../Components/Invite/Invite'

  const Dashbord = ({ user }) => {
    return (
      <>
        <NavBar user={user} />
        <Transition />
        <ScanPay />
        <Bills />
        <Invite />
      </>
    )
  }

  export default Dashbord
