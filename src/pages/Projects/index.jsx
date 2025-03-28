import Card from '../../components/Projects/Card';

import Project from '../../assets/images/project.png';

import './style.css';


function Projects() {
	return(
		<>
			<div className="projects" id="projects">
				<h2> Projects </h2>
				<Card img={Project} title="Project A" description="This is a project made to learn the latest languages by building an app." lang1="React" lang2="JS" lang3="Node" />
				<Card img={Project} title="Project B" description="This is a project made to learn the latest languages by building an app." lang1="React" lang2="JS" lang3="Node" />
				<Card img={Project} title="Project C" description="This is a project made to learn the latest languages by building an app." lang1="React" lang2="JS" lang3="Node" />
			</div>
		</>
	)
}

export default Projects;