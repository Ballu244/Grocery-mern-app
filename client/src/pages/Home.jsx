import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
    return (

        <div className='mt-10'>
            <Hero />
            <Category />
            <BestSeller />
            <Newsletter />
            {/* <Footer /> */}
        </div>
    )
}

export default Home