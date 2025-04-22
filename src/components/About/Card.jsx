function Card({Icon, title, details}) {
	return(
		<>
			<div className="about-details-card">
				<Icon className="icon" />
				<div>
					<h3> {title} </h3>
					<p> {details} </p>
				</div>
			</div>
		</>
	)
}

export default Card;