import React from 'react'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Header from './components/Header'
import Work from './components/section3'

export default function Home() {
  return (
    <main>
      <div className=''>
        <Header/>
        <Section1 />
        <Section2 />
        <Work/>
      </div>
    </main>
  )
}
