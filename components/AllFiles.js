import React from 'react'
import Cards from './Cards'
import Connect from './Connect'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Providers from './Providers'
import Start from './Start'
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
        <Pricing />
        <Start />
        <Footer />
    </div>
  )
}
