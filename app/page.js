import React from 'react'
import Section1 from './components/section1'
import About from './components/About'
import Header from './components/Header'
import Work from './components/section3'
import Contact from './components/contact'

export default function Home() {
  return (
    <main>
      <div className='overflow-hidden'>
        <Header/>
        <Section1 />
        <About />
        <Work/>
        <Contact/>
      </div>
    </main>
  )
}
