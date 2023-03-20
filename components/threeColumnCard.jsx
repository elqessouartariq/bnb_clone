import { TagMini } from "./tagMini"
import { CustomImage } from "./customImage"

ThreeColumnCard.defaultProps = {
	price: 577,
	days: 3,
	rating: 4.87,
	src: "/Images/wholeWord/Toledo.svg" 
}

export function ThreeColumnCard ({ price, days ,rating }) {
	return (
		<div className="w-[290px]  space-y-4 ">
			<CustomImage src={src} />            
			<div className="flex justify-between ">
				<div className="flex items-center ">
					<TagMini/>
					<h3 className="ml-2 first-line:text-secondary-grey   text-shadow-md font-medium ">City name</h3>
				</div>
				<div className="flex items-center">
					<img  src="/icons/starRed.svg" className="h-[10px] w-[10px] mr-1"/>
					<h3 className="font-medium text-xs first-line text-secondary-dark-grey">		
						{rating.toFixed(1)}</h3>
				</div>
			</div>
			<h3 className=" text-sm font-normal text-secondary-dark-grey leading-5">À partir de {price}€/personne - {days} jours</h3>
		</div>
	)
} 