import { CustomImage } from "./customImage";

VerticalMiniCard.defaultProps = {
	country :"Country",
	title: "2 Nights PACKAGE All Inclusive",
	price:577,
	days: 3,	 
	rating: 5.0
}

export function VerticalMiniCard ({country ,title , price , days ,rating}) {
	

	return (
		<div className="w-[188px] space-y-2">
			<div>
				<CustomImage src="/Images/discoveradventure/discoveradv.svg" className="object-cover min-w-full bg-cover min-h-full rounded-md" />
			</div>
			<h3 className=" text-secondary-grey text-sm">{country}</h3>
			<h1 className=" text-secondary-dark-grey font-bold  text-base"  >{title}</h1>
			<h3 className=" text-sm font-light leading-5">À partir de {price}€/personne - <br/>{days} jours</h3>
			<div className="flex ">
				<h3 className="font-bold text-sm first-line text-primary-green">{rating.toFixed(1)}</h3>
				<img className="ml-1" src="/icons/star.svg"/>
			</div>
		</div>
	)
}