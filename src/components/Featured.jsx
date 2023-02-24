import React from 'react'
import Fea1 from '../img/fea1.jpg';
import Fea2 from '../img/fea2.jpg';
import Fea3 from '../img/fea3.jpg';
import Fea4 from '../img/fea4.jpg';
import Fea5 from '../img/fea5.jpg';
import Fea6 from '../img/fea6.jpg';

const Featured = () => {
  return (
    <div>
      <section className="featured" id="featured">
        <div className="center-text">
            <h2>Featured Categories</h2>
        </div>

        <div className="featured-content">
            <div className="row">
                <img src={Fea1} alt=""/>
                <div className="fea-text">
                    <h5>Mens</h5>
                    <p>10 items</p>
                </div>
                <div className="arrow">
                    <a href="#"><i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>

            <div className="row">
                <img src={Fea2} alt=""/>
                <div className="fea-text">
                    <h5>Mens</h5>
                    <p>7 items</p>
                </div>
                <div className="arrow">
                    <a href="#"><i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>

            <div className="row">
                <img src={Fea3} alt=""/>
                <div className="fea-text">
                    <h5>Mens</h5>
                    <p>24 items</p>
                </div>
                <div className="arrow">
                    <a href="#"><i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>

            <div className="row">
                <img src={Fea4} alt=""/>
                <div className="fea-text">
                    <h5>Mens</h5>
                    <p>3 items</p>
                </div>
                <div className="arrow">
                    <a href="#"><i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>

            <div className="row">
                <img src={Fea5} alt=""/>
                <div className="fea-text">
                    <h5>Mens</h5>
                    <p>14 items</p>
                </div>
                <div className="arrow">
                    <a href="#"><i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>

            <div className="row">
                <img src={Fea6} alt=""/>
                <div className="fea-text">
                    <h5>Mens</h5>
                    <p>9 items</p>
                </div>
                <div className="arrow">
                    <a href="#"><i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Featured
