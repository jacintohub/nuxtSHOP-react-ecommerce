import React from 'react'
import Tren1 from '../img/tren1.jpg'
import Tren2 from '../img/tren2.jpg'
import Tren3 from '../img/tren3.jpg'
import Tren4 from '../img/tren4.jpg'

const New = () => {
  return (
    <div>
      <section className="new" id="new">
        <div className="center-text">
            <h2>Featured Categories</h2>
        </div>

        <div className="new-content">
            <div className="box">
                <img src={Tren1} alt=""/>
                <h5>Lorem Ipsum dizgi</h5>
                <h6>$188,00</h6>
                <div className="sale">
                    <h6>Sale</h6>
                </div>
            </div>

            <div className="box">
                <img src={Tren2} alt=""/>
                <h5>Lorem Ipsum dizgi</h5>
                <h6>$188,00</h6>
                <div className="sale">
                    <h6>Sale</h6>
                </div>
            </div>

            <div className="box">
                <img src={Tren3} alt=""/>
                <h5>Lorem Ipsum dizgi</h5>
                <h6>$188,00</h6>
                <div className="sale">
                    <h6>Sale</h6>
                </div>
            </div>

            <div className="box">
                <img src={Tren4} alt=""/>
                <h5>Lorem Ipsum dizgi</h5>
                <h6>$188,00</h6>
                <div className="sale">
                    <h6>Sale</h6>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default New
