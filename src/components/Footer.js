import React from "react";
import logo from "./lemon.jpg"
function Footer(){
    return(
        <footer>
            <img src={logo} width={200} height={50} alt="little lemon logo" />
            <h4>Doormat Navigation</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <h4>Contact</h4>
            <ul>
                <li>Address</li>
                <li>Email</li>
                <li>Phone Number</li>
            </ul>
            <h4>Social Media</h4>
            <ul>
                <li>Facebook</li>
                <li>X</li>
                <li>Instagram</li>
            </ul>
        </footer>
    )
}

export default Footer;