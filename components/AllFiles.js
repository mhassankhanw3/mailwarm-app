import React from 'react'
import Cards from './Cards'
import Connect from './Connect'
import Hero from './Hero'
import Navbar from './Navbar'
import Providers from './Providers'
import Testimonials from './Testimonials'
import Works from './Works'

export default function AllFiles() {
  return (
    <div className='container'>
        <Navbar />
        <Hero />
        <Providers />
        <Cards />
        <Works />
        <Testimonials />
        <Connect />
    </div>
  )
}
