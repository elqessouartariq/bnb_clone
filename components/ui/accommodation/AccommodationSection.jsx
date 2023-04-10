import BigCard from "../../BigCard";
import { SectionDescription } from "../../SectionDescription";
import { SectionTitle } from "../../SectionTitle";

export default function AccommodationSection() {
	return (
		<div className="mt-20">
			<SectionTitle title="Hébergements Airbnb Plus" />
			<SectionDescription desc="Une sélection de logements vérifiés selon des critères de qualité et de design" />
			<BigCard />
		</div>
	);
}
