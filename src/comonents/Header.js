import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const [IslogedIn,setIsLogedIn]=useState(false);
    const [Display,setDisplay]=useState();
    return(<>
    <div className="header">
        <img className="logo "src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/76/8831764076_a07bd862-19b6-487f-a02a-ebe39e82f85b.png?cb=1707754272"></img>
        <div className="naveInfo">
            
        <a href="#" onClick={()=>{
            const element = document.getElementById("myDropdown");
            element.classList.toggle("active");
        }}>
            <div className="toggle" >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            </div>
            </a>
            <ul id="myDropdown">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/restaurents">Restaurents</Link></li>
                <li><Link to="/contact" >contact</Link></li>
            </ul>
        </div>
        {IslogedIn?<button onClick={()=>{
            setIsLogedIn(false);
        }}>logout</button>: <button onClick={()=>{
            setIsLogedIn(true);
        }}>Login</button>}
    </div>
    </>)
};
export default Header;