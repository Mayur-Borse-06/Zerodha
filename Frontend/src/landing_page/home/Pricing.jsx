import React from 'react'

const Pricing = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-5">
          <h1 className='fs-3 mb-4'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price <br /> transparency in India. Flat fees and no hidden charges.</p>
          <a href="" >See pricing <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col mt-4">
          <div className="row">
            <div className="col">
            <div className='d-flex'>
              <img src="media/images/pricing0.svg" alt="" style={{width: "50%"}} />
              <p className='fs-12 mt-5'> Free account opening</p>
            </div>
          </div>
          <div className="col">
            <div className='d-flex'>
              <img src="media/images/pricing0.svg" alt="" style={{width: "50%"}} />
              <p className='fs-12 mt-5'> Free equity delivery </p>
            </div>
          </div>
          <div className="col">
            <div className='d-flex'>
              <img src="media/images/intradayTrades.svg" alt="" style={{width: "50%"}} />
              <p className='fs-12 mt-5'>Intraday and F&O</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
