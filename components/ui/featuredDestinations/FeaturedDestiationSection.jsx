import { ForColumnCard } from "../../ForColumnCard";
import { SectionDescription } from "../../SectionDescription";
import { SectionTitle } from "../../SectionTitle";

export default function FeaturedDestiationSection() {
	return (
		<div className="mt-20">
			<SectionTitle title="Destinations Airbnb Plus à la Une" />
			<SectionDescription desc="Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris" />
			<div className="flex gap-3">
				<div className="w-1/3">
					<ForColumnCard />
				</div>
				<div className="w-1/3">
					<ForColumnCard />
				</div>
				<div className="w-1/3">
					<ForColumnCard />
				</div>
			</div>
		</div>
	);
}
