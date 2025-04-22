import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import './style.css';


function Navbar() {
	let [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	let [isActive, setIsActive] = useState(false);
	
	let handleActive = () => {
		setIsActive(!isActive);
	};
	
	return(
		<>
			<nav className={isMobile ? "mobile-navbar" : "navbar"}>
				<a href="#"> Portfolio </a>
				{isMobile && (isActive ? <IoClose className="icon" onClick={handleActive} /> : <IoMenu className="icon" onClick={handleActive} />)}
				<ul className={isMobile && (isActive ? "active" : "")}>
					<li>
						<a href="#about"> About </a>
					</li>
					<li>
						<a href="#experience"> Experience </a>
					</li>
					<li>
						<a href="#projects"> Projects </a>
					</li>
					<li>
						<a href="#contact"> Contact </a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar;