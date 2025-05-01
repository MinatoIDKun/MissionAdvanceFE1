import React from 'react';
import Navbar from '../organism/Navbar';
import Footer from '../organism/Footer';

function NavbarFooter (isLoggedIn) {

  return (
    <>
    <Navbar isLoggedIn={true}/>
    <Footer />
    </>
  )
}

export default NavbarFooter