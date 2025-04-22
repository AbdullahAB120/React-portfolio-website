function Card({Icon, title, date, item1, item2}) {
	return(
		<>
			<div className="experience-details-card">
				<Icon className="icon" />
				<div>
					<h3> {title} </h3>
					<span> {date} </span>
					<ul>
						<li> {item1} </li>
						<li> {item2} </li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Card;