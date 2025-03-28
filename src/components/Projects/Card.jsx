function Card({img, title, description, lang1, lang2, lang3}) {
	return(
		<>
			<div className="project-item">
				<img src={img} alt="Project Image" />
				<h3> { title } </h3>
				<p> { description } </p>
				<div className="lang">
					<span> { lang1 } </span>
					<span> { lang2 } </span>
					<span> { lang3 } </span>
				</div>
				<div className="button">
					<button> Demo </button>
					<button> Source </button>
				</div>
			</div>
		</>
	)
}

export default Card;