import React from 'react'
import './Home.css'
import NavbarExample from '../../components/Navbar/Navbar'
import Popular from '../../components/Popular/Popular'
import NewCollection from '../../components/NewCollection/NewCollection'
import EmailBox from '../../components/EmailBox/EmailBox'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <NavbarExample />
      <NewCollection />
      {/* <Popular /> */}
      <EmailBox />
      <Footer />
    </main>
  )
}

export default Home