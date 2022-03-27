import Card from "../Card";

const LatestItems = () => {
	return (
		<div className="pb-16">
			<h3 className="title3-text text-center pb-8">Latest Items</h3>
			<div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 place-items-center pb-8">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default LatestItems;
