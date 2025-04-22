import hero from '../../assets/images/hero.png';

import './style.css';


function Hero() {
	return(
		<>
			<div className="hero">
				<div className="hero-details">
					<h2> Hi, I am Ada</h2>
					<p> I’m a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you’d like to learn more! </p>
					<div className="button">
						<button> Hire Me </button>
						<button> Contact Me </button>
					</div>
				</div>
				<div className="hero-image">
					<img src={hero} alt="hero image" />
				</div>
			</div>
		</>
	)
}

export default Hero;