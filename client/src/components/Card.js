import shoe from "../assets/images/shoe.png";

const Card = () => {
	return (
		<div className="p-4 hover:shadow-lg rounded-xl border w-fit">
			<img
				src={shoe}
				className="rounded-xl pb-2 bg-contain w-60 h-60"
				alt=""
			/>
			<p className="subtitle-text pb-2">Nike Shoes</p>
			<p className="body-text">Price</p>
			<p className="boldBody-text text-cmp-primary">0.25 ETH</p>
		</div>
	);
};

export default Card;
