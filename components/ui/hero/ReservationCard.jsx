import { InputText } from "../../InputText";
import { CtaMain } from "../../CtaMain";

export function ReservationCard() {
	return (
		<div className=" w-[400px] bg-white space-y-3 p-8 m-16 flex flex-col">
			<h1 className=" text-secondary-dark-grey font-semibold text-[34px]">
				Réservez des hébergements et des activités uniques.
			</h1>
			<InputText label="Où" placeholder="Partout" />
			<div className="flex mr-12">
				<div className="flex-1">
					<InputText
						label="Arrivée"
						placeholder="jj/mm/aaaa"
						width="1/2"
					/>
				</div>
				<div className="flex-1">
					<InputText
						label="Départ"
						placeholder="jj/mm/aaaa"
						width="1/2"
					/>
				</div>
			</div>
			<InputText label="Voyageurs" placeholder="Voyageurs" />
			<div className=" flex justify-end">
				<CtaMain content="Rechercher" />
			</div>
		</div>
	);
}
