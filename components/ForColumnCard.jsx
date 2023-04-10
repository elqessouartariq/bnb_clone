import { CustomImage } from "./CustomImage";

ForColumnCard.defaultProps = {
	price: 577,
	days: 3,
	title:"Plus de 200 séjours vérifiés",
	src: "/Images/destination/destination1.svg"
}

export function ForColumnCard ( { price,days,title,src } ) {
	return (
		<div className="w-full space-y-3">
			<div className="relative">
				<CustomImage className="object-cover w-full -z-10" src={src} />
				<img src="/logoWhite.svg" className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10"/>
			</div>
			<h3 className="font-bold  text-primary-purple text-xs uppercase">{title}</h3>
			<h3 className=" text-sm font-normal text-secondary-dark-grey leading-5">À partir de {price}€/personne - {days} jours</h3>
		</div>
	)
}