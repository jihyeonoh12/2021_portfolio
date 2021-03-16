
import React from 'react';
import Navbar from '../component/Navbar'
import Body from '../component/Body'
import Herobanner from '../component/Herobanner'
import Footer from '../component/Footer'

function Home () {
    return (
    <div className="App">
      <Navbar />
      <Herobanner />
      <Body />
      <Footer />
    </div>
    )
}

export default Home