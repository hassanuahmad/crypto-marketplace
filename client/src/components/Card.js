const Card = ({title, price, image}) => {
	return (
		<div className="p-4 hover:shadow-lg rounded-xl border w-fit">
			<img
				src={image}
				className="rounded-xl pb-2 bg-contain w-60"
				alt=""
			/>
			<p className="subtitle-text pb-2">{title}</p>
			<p className="body-text">Price</p>
			<p className="boldBody-text text-cmp-primary">{price} ETH</p>
		</div>
	);
};

export default Card;
