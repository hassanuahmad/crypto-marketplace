import { Link } from "react-router-dom";

const Footer = () => {
	const footerElements1 = [
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
	const footerElements2 = [
		{
			display: "MetaMask",
			to: "https://metamask.io",
		},
		{
			display: "Rainbow Wallet",
			to: "https://rainbow.me",
		},
		{
			display: "Guarda",
			to: "https://guarda.com",
		},
	];
	const footerElements3 = [
		{
			display: "Ethereum",
			to: "https://ethereum.org/en/",
		},
		{
			display: "Etherscan",
			to: "https://etherscan.io",
		},
		{
			display: "Blockchain",
			to: "https://www.investopedia.com/terms/b/blockchain.asp",
		},
	];

	return (
		<div className="text-white bg-cmp-primary flex flex-col items-center text-center py-32 lg:text-left">
			<div className="lg:flex lg:flex-row">
				<div className="pb-12 lg:pb-0 lg:pr-48">
					<p className="boldBody-text pb-6">Marketplace</p>
					{footerElements1.map((element, index) => (
						<Link
							key={index}
							className={
								"flex justify-center lg:justify-start pb-4 body-text hover:text-cmp-black transition-color duration-100"
							}
							to={element.to}
						>
							{element.display}
						</Link>
					))}
				</div>
				<div className="pb-12 lg:pb-0 lg:pr-48">
					<p className="boldBody-text pb-6">Wallets</p>
					{footerElements2.map((element, index) => (
						<a
							key={index}
							className={
								"flex justify-center lg:justify-start pb-4 body-text hover:text-cmp-black transition-color duration-100"
							}
							href={element.to}
							target="_blank"
						>
							{element.display}
						</a>
					))}
				</div>
				<div>
					<p className="boldBody-text pb-6">Resources</p>
					{footerElements3.map((element, index) => (
						<a
							key={index}
							className={
								"flex justify-center lg:justify-start pb-4 body-text hover:text-cmp-black transition-color duration-100"
							}
							href={element.to}
							target="_blank"
						>
							{element.display}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
