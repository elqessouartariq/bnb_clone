import { CustomImage } from "./customImage";

ForColumnCard.defaultProps = {
	price: 577,
	days: 3,
	title:"Plus de 200 séjours vérifiés",
	src: "/Images/destination/destination1.svg"
}

export function ForColumnCard ( { price,days,title,src } ) {
	return (
		<div className="w-[391px] space-y-3">
			<CustomImage className="object-cover min-w-[391px]" src={src} />		
			<h3 className="font-bold  text-primary-purple text-xs uppercase">{title}</h3>
			<h3 className=" text-sm font-normal text-secondary-dark-grey leading-5">À partir de {price}€/personne - {days} jours</h3>
		</div>
	)
}