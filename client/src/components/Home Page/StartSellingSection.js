const StartSellingSection = () => {
	const sellingInfo = [
		{
			title: "Connect Wallet",
			text: "Connect with your wallet of choice and you will be good to go",
		},
		{
			title: "List Item",
			text: "List your item, tell us what you’re selling in the sell page and click list",
		},
		{
			title: "Get Paid",
			text: "Regardless of how the buyers pays, you will have your money in your wallet",
		},
	];

	const sellingInfoPadding = (index) => {
		if (index === sellingInfo.length - 1) {
			return 0;
		}
		return 14;
	};

	return (
		<div className="pb-16">
			<h3 className="title3-text text-center pb-8">Start Selling</h3>
			<div className="flex flex-col items-center lg:flex-row lg:justify-center">
				{sellingInfo.map((info, index) => (
					<div
						key={index}
						className={`flex items-center pb-14 max-w-xs lg:pr-${sellingInfoPadding(
							index
						)}`}
					>
						<p className="pr-4 text-9xl font-bold outline-text text-white">
							{index + 1}
						</p>
						<div className="flex flex-col">
							<p className="boldBody-text pb-2">{info.title}</p>
							<p className="body-text ">{info.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StartSellingSection;
