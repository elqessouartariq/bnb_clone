import { Header } from "./Header";
import { ReservationCard } from "./ReservationCard";

export function HeroSection() {
	return (
		<>
			<div className="relative bg-hero-image bg-cover h-screen max-h-full">
				<Header>
					<ReservationCard />
				</Header>
			</div>
		</>
	);
}
