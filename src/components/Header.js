import React from "react";
import logo from "./lemon.jpg";
function Header(){
    return(
        <header>
            <img src={logo} width={200} height={50} alt="little lemon logo" />
        </header>
    )
}

export default Header;