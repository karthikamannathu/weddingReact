import React from 'react'

function Footer() {
  return (
    <footer id="contact">
    <div className="container">
        <div className="f-container">
            <h2>WedMeGood - Your Personal Wedding Planner</h2><br/>
            <p>Plan your wedding with Us WedMeGood is an Indian Wedding Planning Website </p>
            <div>
                <button className="btn">Register as a Vendor</button>
            </div>
            <div className="social">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-pinterest"></i>
            </div>
        </div>
        <div className="f-container">
            <h2>Our Location</h2>
            <a href="#"><i className="fas fa-angle-right"></i>Anand</a>
            <a href="#"><i className="fas fa-angle-right"></i>Vadodara</a>
            <a href="#"><i className="fas fa-angle-right"></i>Mumbai</a>
            <a href="#"><i className=" fas fa-angle-right "></i>Ahemdabad</a>
                <a href="# "><i className="fas fa-angle-right "></i>Surat</a>
            </div>
            
            <div className="f-container ">
                <h2>Our Newsletter</h2>
                <p>Subscribe for latest updates</p>
                <input type="text " placeholder="Enter Your Email "/>
                <button className="btn ">Subscribe</button>
                </div>
        </div>
    </footer>
  )
}

export default Footer