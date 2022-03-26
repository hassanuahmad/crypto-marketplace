import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button";

const Logo = () => {
	return (
		<Link to="/">
			<img className="h-12 w-12" src={logo} />
		</Link>
	);
};

const Navbar = () => {
	const navElements = [
		{
			display: "Home",
			to: "/",
		},
		{
			display: "Explore",
			to: "/explore",
		},
		{
			display: "Sell",
			to: "/sell",
		},
	];
	return (
		<navbar className="w-full flex shadow-md">
			<div className="mx-auto container h-24 px-20 flex justify-between items-center">
				<div className="">
					<Logo />
				</div>
				<div className="">
					{navElements.map((item, i) => {
						return (
							<Link
								key={i}
								className="mx-5 text-black hover:text-cmp-primary transition-color duration-100"
								to={item.to}
							>
								{item.display}
							</Link>
						);
					})}
				</div>
				<div className="">
					<Button outline text="Connect Wallet" onClick={() => {}} />
				</div>
			</div>
		</navbar>
	);
};

export default Navbar;
