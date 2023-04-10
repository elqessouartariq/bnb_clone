import { SectionTitle } from "../../SectionTitle";
import { ThreeColumnCard } from "../../ThreeColumnCard";

export default function WholeWorldSection() {
	return (
		<div className="mt-20">
			<SectionTitle title="Logements dans le monde entier" />
			<div className="flex flex-wrap gap-3 ">
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
				<div className="w-[24%]">
					<ThreeColumnCard />
				</div>
			</div>
		</div>
	);
}
