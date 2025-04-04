import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div className="container mt-3">
      <Header />
      <div className="col-12">
        <Nav className="col-4" />
        <Main className="col-4" />
        <Aside className="col-4" />
      </div>
      <Footer />
    </div>
  )
}
