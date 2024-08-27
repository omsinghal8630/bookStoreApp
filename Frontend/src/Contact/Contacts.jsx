import React from 'react'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'

function Contacts() {
  return (
      <>
          <Navbar />
          <div className="min-h-screen">
          <ContactUs />
          </div>
      </>
  )
}

export default Contacts
