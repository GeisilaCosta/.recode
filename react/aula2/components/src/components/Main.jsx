import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Main() {
  return (
    <div className='container' style={{ backgroundColor: '#ecaa7d', color: 'white', padding: '15px', margin: '10px 0', display: 'flex' }}>
      <h3>Main Content</h3>
      <div style={{ flex: 1 }}>
        {/* Main content goes here */}
      </div>
      <Aside />
      <Footer />
    </div>
  )
}
