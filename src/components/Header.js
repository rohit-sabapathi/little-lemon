import logo from "./lemon.jpg";

function Header(){
    return(
        <header className="nav-bar" >
            <nav className="navigation">
                <img src={logo} width={300} height={75} alt="little lemon logo" />
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Menu</li>
                  <li>Reservations</li>
                  <li>Order Online</li>
                  <li>Login</li>
              </ul>
            </nav>
        </header>
    )
}

export default Header;