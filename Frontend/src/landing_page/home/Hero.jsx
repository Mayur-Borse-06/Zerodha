import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5'>
      <div className="row text-center">
        <img src="/media/images/homeHero.png" alt="Hero image" className='mb-5' />
        <h1 className='mt-5'>Invest in Everything</h1>
        <p className='mb-4 mt-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary' style={{width: "20%", margin: "0 auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero
