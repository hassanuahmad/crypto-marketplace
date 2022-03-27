import FeaturedItems from "../components/Home Page/FeaturedItems";
import HeroSection from "../components/Home Page/HeroSection";
import LatestItems from "../components/Home Page/LatestItems";
import StartSellingSection from "../components/Home Page/StartSellingSection";

const Home = () => {
	return (
		<div className="mx-auto container">
			<HeroSection />
			<FeaturedItems />
			<LatestItems />
			<StartSellingSection />
		</div>
	);
};

export default Home;
