import Card from "../components/Card";
import HeroSection from "../components/Home Page/HeroSection";
import StartSellingSection from "../components/Home Page/StartSellingSection";

const Home = () => {
	return (
		<div className="mx-auto container">
			<HeroSection />
			<StartSellingSection />
			<div className="pb-16 flex">
				<Card />
			</div>
		</div>
	);
};

export default Home;
