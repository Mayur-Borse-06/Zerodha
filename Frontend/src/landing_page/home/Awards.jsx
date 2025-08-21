import React from 'react'

const Awards = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="largest broker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quibusdam consectetur aliquam nulla cum rem, eum facere </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="press logo" style={{width: "90%"}} />
        </div>
      </div>
    </div>
  )
}

export default Awards;
