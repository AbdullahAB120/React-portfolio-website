import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import './style.css';


function Contact() {
	return(
		<>
			<div className="contact" id="contact">
				<div className="contact-intro">
					<h2> Contact Me </h2>
					<p> Feel free to reach out! </p>
				</div>
				<div className="contact-details">
					<div className="contact-info">
						<IoIosMail className="icon" />
						<span> myemail@email.com </span>
					</div>
					<div className="contact-info">
						<FaLinkedin className="icon" />
						<span> linkedin.com/myname </span>
					</div>
					<div className="contact-info">
						<FaGithub className="icon" />
						<span> github.com/myname </span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact;