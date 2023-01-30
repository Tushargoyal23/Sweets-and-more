import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Slides from '../components/Slides'
export default function home() {
  return (
    <div>
       <div><Navbar /></div>
      <div><Slides/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Card/></div>
      <div><Footer /></div>
    </div>
  )
}
