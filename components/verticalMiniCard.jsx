import { CustomImage } from "./customImage";
export function VerticalMiniCard () {
	return (
		<div className="w-[188px] h-[214px] space-y-2">
			<div>
				<CustomImage src="/Images/discoveradventure/discoveradv.svg" className="w-full bg-cover h-full rounded-md" />
			</div>
			<h3 className=" text-secondary-grey text-sm">Country</h3>
			<h1 className=" text-secondary-dark-grey font-bold  text-base" >2 Nights PACKAGE All Inclusive</h1>
			<h3 className=" text-sm font-light leading-5">À partir de 577€/personne - <br/>3 jours</h3>
			<div className="flex ">
				<h3 className="font-bold text-sm first-line text-primary-green">5.0</h3>
				<img className="ml-1" src="/icons/star.svg"/>
			</div>
		</div>
	)
}