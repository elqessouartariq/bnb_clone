import { Header } from "./header"
import { ReservationCard } from "./reservationCard"

export function HeroSection() {
	return (
		<div className=" bg-hero-image bg-cover min-h-full">
			<Header />
			<ReservationCard />
		</div>
	)
}