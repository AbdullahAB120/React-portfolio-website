import { FcGoogle } from "react-icons/fc";
import { TiVendorMicrosoft } from "react-icons/ti";
import { RiNetflixFill } from "react-icons/ri";

import Card from '../../components/Experience/Card';
import Skill from '../../components/Experience/Skill';

import './style.css';


function Experience() {
	return(
		<>
			<div className="experience" id="experience">
				<div className="experience-details">
					<h2> Experience </h2>
					<Card Icon={FcGoogle} title="Software Engineer, Google" date="September, 2022 - Present" item1="Worked on Google Maps" item2="Reduced Load times by 50%" />
					<Card Icon={TiVendorMicrosoft} title="UI Designer, Microsoft" date="August, 2021 - August, 2022" item1="Worked on Windows 11" item2="Designed the control panel" />
					<Card Icon={RiNetflixFill} title="SWE, Intern, Netflix" date="April, 2020 - June, 2021" item1="Worked on component library" item2="Helped create UI components" />
				</div>
				<Skill/>
			</div>
		</>
	)
}

export default Experience;