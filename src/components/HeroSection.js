import heroPic from "../assets/images/heroPic.png";
import Button from "./Button";

const HeroSection = () => {
	return (
		<div className="container mx-auto flex flex-col py-16 text-center items-center md:justify-center lg:flex-row lg:text-left lg:justify-center">
			<div className="lg:order-2">
				<img src={heroPic} alt="" width="400px" height="400px" />
			</div>
			<div className="lg:pr-16">
				<h1 className="title2-text lg:max-w-lg pb-2">
					The first decentralized marketplace where you can buy and
					sell
				</h1>
				<p className="subtitle-regular-text lg:max-w-md pb-9">
					With CMP, you can buy and sell items with cryptocurrency
				</p>
				<Button text="Emplore" />
			</div>
		</div>
	);
};

export default HeroSection;
