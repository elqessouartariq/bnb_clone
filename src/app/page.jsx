import FeaturedDestiationSection from "../../components/ui/featuredDestinations/FeaturedDestiationSection";
import AdventureSection from "../../components/ui/adventures/Adventuresection";
import ExploreSection from "../../components/ui/explore/ExploreSection";
import HighlyRatedSection from "../../components/ui/highlyRated/HighlyRatedSection";
import WholeWorldSection from "../../components/ui/wholeWord/WholeWorldSection";
import AccommodationSection from "../../components/ui/accommodation/AccommodationSection";
import { HeroSection } from "../../components/ui/hero/HeroSection";

export default function Home() {
	return (
		<>
			<header>
				<HeroSection />
			</header>
			<main className="m-20">
				<ExploreSection />
				<AccommodationSection />
				<AdventureSection />
				<WholeWorldSection />
				<HighlyRatedSection />
				<FeaturedDestiationSection />
			</main>
		</>
	);
}
