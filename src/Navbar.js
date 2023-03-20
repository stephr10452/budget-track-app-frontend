import React,{useState} from "react";

function NavBar(){
   
const [active, setActive] = useState('Home');

const handleClick = (e) => {
  setActive(e.target.innerText);
};

return (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className={`navbar-item ${active === 'Home' ? 'active' : ''}`} onClick={handleClick}>Home</li>
      <li className={`navbar-item ${active === 'About' ? 'active' : ''}`} onClick={handleClick}>About</li>
      <li className={`navbar-item ${active === 'Contact' ? 'active' : ''}`} onClick={handleClick}>Contact</li>
    </ul>
  </nav>
);


}

export default NavBar;