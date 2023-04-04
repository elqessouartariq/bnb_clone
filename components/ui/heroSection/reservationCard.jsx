import { InputText } from "../../inputText";
import { CtaMain } from "../../ctaMain";

export function ReservationCard () {
	return (
		<div className="w-[391px]  bg-white space-y-3 p-6 m-14 rounded-md">
			<h1 className=" text-secondary-dark-grey font-semibold text-[34px]">Réservez des hébergements et des activités uniques.</h1>
			<InputText  label="Où" placeholder="Partout"/>
			<div className="flex">
				<div className="flex-1 mr-2">
					<InputText label="Arrivée" placeholder="jj/mm/aaaa" />
				</div>
				<div className="flex-1	">
				<InputText label="Départ" placeholder="jj/mm/aaaa" />
				</div>
			</div>
			<InputText label="Voyageurs" placeholder="Voyageurs" />
			<div className="flex justify-end">
				<CtaMain content="Rechercher" />
			</div>
		</div>
	)
}