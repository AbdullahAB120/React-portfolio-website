import html from '../../assets/images/skill/html.png';
import css from '../../assets/images/skill/css.png';
import react from '../../assets/images/skill/react.png';
import node from '../../assets/images/skill/node.png';
import mongoDB from '../../assets/images/skill/mongoDB.png';
import figma from '../../assets/images/skill/figma.png';


function Skill() {
	return(
		<>
			<div className="skill">
				<h2> My Skill </h2>
				<div className="skill-item">
					<img src={html} alt="html" />
					<p> HTML </p>
				</div>
				<div className="skill-item">
					<img src={css} alt="css" />
					<p> CSS </p>
				</div>
				<div className="skill-item">
					<img src={react} alt="react" />
					<p> React </p>
				</div>
				<div className="skill-item">
					<img src={node} alt="node" />
					<p> Node </p>
				</div>
				<div className="skill-item">
					<img src={mongoDB} alt="mongoDB" />
					<p> MongoDB </p>
				</div>
				<div className="skill-item">
					<img src={figma} alt="figma" />
					<p> Figma </p>
				</div>
			</div>
		</>
	)
}

export default Skill;