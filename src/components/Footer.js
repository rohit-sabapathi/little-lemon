import React from "react";
import logo from "./lemon.jpg"
function Footer(){
    return(
        <footer className="footer-nav">
            <img src={logo} width={300} height={75} alt="little lemon logo" />
            <div className="doormat-nav">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="contact">
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Email</li>
                    <li>Phone Number</li>
                </ul>
            </div>
            <div className="social-media">
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook</li>
                    <li>X</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;