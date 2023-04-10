import { Header } from "./Header";
import { ReservationCard } from "./ReservationCard";

export function HeroSection() {
	return (
		<>
			<div className=" bg-hero-image bg-cover">
				<Header />
				<ReservationCard />
			</div>
		</>
	);
}
