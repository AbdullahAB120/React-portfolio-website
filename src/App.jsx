import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './style.css';


function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</>
	)
}

export default App;