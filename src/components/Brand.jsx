import React from 'react'
import Brand1 from '../img/brand1.png'
import Brand2 from '../img/brand2.png'
import Brand3 from '../img/brand3.png'
import Brand4 from '../img/brand4.png'
import Brand5 from '../img/brand5.png'
import Brand6 from '../img/brand6.png'

const Brand = () => {
  return (
    <div>
      <div className="brand">
        <div className="brand-content">
            <div className="main">
                <img src={Brand1} alt=""/>
            </div>
            <div className="main">
                <img src={Brand2} alt=""/>
            </div>
            <div className="main">
                <img src={Brand3} alt=""/>
            </div>
            <div className="main">
                <img src={Brand4} alt=""/>
            </div>
            <div className="main">
                <img src={Brand5} alt=""/>
            </div>
            <div className="main">
                <img src={Brand6} alt=""/>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Brand
