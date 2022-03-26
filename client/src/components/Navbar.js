import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConnectButton from "./ConnectButton";

const Logo = () => {
	return (
		<Link to="/">
			<img className="h-12 w-12" src={logo} alt="" />
		</Link>
	);
};

const Navbar = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

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
		<>
			<div className="w-full block shadow-md">
				<div className="mx-auto container h-24 md:px-20 px-4 flex justify-between items-center">
					<div className="">
						<Logo />
					</div>

					{/* Desktop nav items */}
					<div className="hidden md:inline">
						{navElements.map((item, i) => {
							return (
								<Link
									key={i}
									className="mx-5 text-cmp-black hover:text-cmp-primary transition-color duration-100"
									to={item.to}
								>
									{item.display}
								</Link>
							);
						})}
					</div>
					<div className="hidden md:inline">
						<ConnectButton />
					</div>
					<div className="block md:hidden right-0 pr-4">
						<FontAwesomeIcon
							className="text-xl"
							icon={faBars}
							onClick={() => setHamburgerOpen(!hamburgerOpen)}
						/>
					</div>
				</div>
			</div>
			{/* mobile items */}
			{hamburgerOpen && (
				<div className="w-full py-2 bg-cmp-primary flex flex-col items-center md:hidden">
					{navElements.map((item, i) => {
						return (
							<Link
								to={item.to}
								key={i}
								onClick={() => setHamburgerOpen(false)}
							>
								<li className="list-none py-4">
									{item.display}
								</li>
							</Link>
						);
					})}
					<ConnectButton />
				</div>
			)}
		</>
	);
};

export default Navbar;
