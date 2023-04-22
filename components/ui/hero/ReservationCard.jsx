import { InputText } from "../../InputText";
import { CtaMain } from "../../CtaMain";

export function ReservationCard() {
	return (
		<div className="w-1/3 bg-white space-y-3 p-8 m-20 flex flex-col">
			<h1 className=" text-secondary-dark-grey font-semibold text-[34px]">
				Réservez des hébergements et des activités uniques.
			</h1>
			<InputText label="Où" placeholder="Partout" />
			<div className="flex ">
				<div className="w-1/2">
					<InputText label="Arrivée" placeholder="jj/mm/aaaa" />
				</div>
				<div className="w-1/2">
					<InputText label="Départ" placeholder="jj/mm/aaaa" />
				</div>
			</div>
			<InputText label="Voyageurs" placeholder="Voyageurs" />
			<div className="flex justify-end">
				<CtaMain content="Rechercher" />
			</div>
		</div>
	);
}
