import { IoColorPaletteOutline } from "react-icons/io5";
import { VscServerProcess } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";

import Card from '../../components/About/Card';

import about from '../../assets/images/about.png';

import './style.css';


function About() {
	return(
		<>
			<div className="about" id="about">
				<div className="about-image">
					<img src={about} alt="about image"/>
				</div>
				<div className="about-details">
					<h2> About </h2>
					<Card Icon={FaLaptopCode} title="Frontend Developer" details="I’m a front-end developer with experience in building responsive and optimized sites" />
					<Card Icon={VscServerProcess} title="Backend Developer" details="I have experience developing fast and optimised back-end systems and APIs" />
					<Card Icon={IoColorPaletteOutline} title="UI/UX Designer" details="I have designed multiple landing pages and have created design systems as well" />
				</div>
			</div>
		</>
	)
}

export default About;