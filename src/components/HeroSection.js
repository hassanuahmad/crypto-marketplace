import heroPic from "../assets/images/heroPic.png";

const HeroSection = () => {
	return (
		<div className="flex">
			<div>
				<h1>
					The first decentralized marketplace where you can buy and
					sell
				</h1>
				<p>
					With Opensea, you can buy and sell items with cryptocurrency
				</p>
				<button>Explore</button>
			</div>
			<div>
				<img src={heroPic} alt="" />
			</div>
		</div>
	);
};

export default HeroSection;
