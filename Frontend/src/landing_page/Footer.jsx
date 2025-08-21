import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col">
           <img src="media/images/logo.svg" className="img-fluid" alt="" style={{maxWidth: "125px"}}/>
           <p className='mt-4 mb-4'>© 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.</p>
           <ul className='d-flex gap-4'>
            <li><i className="fa-brands fa-square-facebook fs-4"></i></li>
            <li><i className="fa-brands fa-whatsapp fs-4"></i></li>
            <li><i className="fa-brands fa-linkedin fs-4"></i></li>
           </ul>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Footer
