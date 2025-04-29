import React from "react";
import logoImg from "../../Assets/Images/logo.png";
import "./Styles.css"; 

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id="navbar">
                  <div className="nav-brand">
                  <img src={logoImg} alt="Logo" style={{ width: "100px", height: "auto" }} />
            
                     
                     <h1>Space Flight News</h1>
                  </div>
                  <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About Us</a></li>
                  </ul>
                </nav>
                
               </header>
        )
    }
}

export default Navbar;