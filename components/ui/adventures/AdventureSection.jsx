import { SectionDescription } from "../../sectionDescription";
import { SectionTitle } from "../../sectionTitle";
import { VerticalMiniCard } from "../../verticalMiniCard";

export default function AdventureSection() {
	return (
		<div className="mt-20">
			<SectionTitle title="Découvrez les aventures Airbnb" />
			<SectionDescription desc="Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris" />
			<div className="flex gap-4">
				<div className="flex w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="flex w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="flex w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="flex w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="flex w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="flex w-1/6">
					<VerticalMiniCard />
				</div>
			</div>
		</div>
	);
}
