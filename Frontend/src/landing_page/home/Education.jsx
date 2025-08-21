import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col">
          <img src="/media/images/education.svg" alt="" />
        </div>
        <div className="col text-start mt-5">
          <h1 className='fs-4'>Free and open market education</h1>
          <p className='mt-4 mb-4'>Varsity, the largest online stock market education book in the world <br /> covering everything from the basics to advanced trading.</p>
          <a href="" >Varsity <i className="fa-solid fa-arrow-right"></i></a>
          <p className='mt-4 mb-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" >TradingQ&A  <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education
