import { HorizontalMiniCard } from "../../horizontalMiniCard";
import { SectionTitle } from "../../sectionTitle";

export default function ExploreSection() {
	return (
		<div className="mt-20">
			<SectionTitle title="Explorer Airbnb" />
			<div className="flex gap-4">
				<div className="w-1/3">
					<HorizontalMiniCard />
				</div>
				<div className="w-1/3">
					<HorizontalMiniCard />
				</div>
				<div className="w-1/3">
					<HorizontalMiniCard />
				</div>
			</div>
		</div>
	);
}
