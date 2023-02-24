import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="main-contact">
            <h2>NuxtSHOP</h2>
            <h5>Let's Connect With Us</h5>

            <div className="icons">
                <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <a href="#"><i className='bx bxl-twitter'></i></a>
            </div>
        </div>

        <div className="main-contact">
            <h3>Explorer</h3>
            <li><a href="#home">Home</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#new">New</a></li>
            <li><a href="#contact">Contact</a></li>
        </div>

        <div className="main-contact">
            <h3>Our Services</h3>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Free Shipping</a></li>
            <li><a href="#">Gift Cards</a></li>
        </div>

        <div className="main-contact">
            <h3>Shipping</h3>
            <li><a href="#">Clothing Store</a></li>
            <li><a href="#">Trending Shoes</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Sale</a></li>
        </div>
    </section>

    <div className="last-text">
        <p>Copyright &copy; 2023 - All rights reserved | This template made by Mandeke Jacinto Lela</p>
    </div>
    </div>
  )
}

export default Contact
