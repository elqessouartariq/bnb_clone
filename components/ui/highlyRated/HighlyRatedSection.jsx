import { SectionDescription } from "../../SectionDescription";
import { SectionTitle } from "../../SectionTitle";
import { VerticalMiniCard } from "../../VerticalMiniCard";

export default function HighlyRatedSection() {
	return (
		<div className="mt-20">
			<SectionTitle title="Expériences très bien notées" />
			<SectionDescription desc="Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris" />
			<div className="flex gap-4">
				<div className="w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="w-1/6">
					<VerticalMiniCard />
				</div>
				<div className="w-1/6">
					<VerticalMiniCard />
				</div>
			</div>
		</div>
	);
}
