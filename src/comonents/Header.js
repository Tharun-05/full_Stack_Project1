import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    const closeDropdown = () => {
        setIsActive(false);
    };

    return (
        <div className="header">
            <img className="logo" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/76/8831764076_a07bd862-19b6-487f-a02a-ebe39e82f85b.png?cb=1707754272" alt="logo"></img>
            <div className="naveInfo">
                <a href="#" onClick={toggleDropdown}>
                    <div className="toggle">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </a>
                <div>
                    <ul id="myDropdown" className={isActive ? "active" : ""}>
                        <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
                        <li><Link to="/about" onClick={closeDropdown}>About</Link></li>
                        <li><Link to="/restaurents" onClick={closeDropdown}>Restaurants</Link></li>
                        <li><Link to="/contact" onClick={closeDropdown}>Contact</Link></li>
                    </ul>
                </div>
            </div>
            {isLogedIn ? <button onClick={() => { setIsLogedIn(false); }}>Logout</button> : <button onClick={() => { setIsLogedIn(true); }}>Login</button>}
        </div>
    );
};

export default Header;
