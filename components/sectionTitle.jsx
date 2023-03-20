SectionTitle.defaultProps = {
	title: "Hébergements Airbnb Plus"
}

export function SectionTitle ( {title} ) {
	return (
		<h1 className=" text-secondary-dark-grey font-bold ">{title}</h1>
	)
}