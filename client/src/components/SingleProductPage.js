import Button from "./Button";
import shoe from "../assets/images/shoe.png";

const SingleProductPage = ({ title, description, category, price }) => {
	return (
		<div className="mx-auto w-fit">
			<div className="py-16 px-8 flex flex-col lg:flex-row">
				<div className="pb-2 lg:pr-20">
					<img
						src={shoe}
						className="rounded-lg"
						height="500px"
						width="500px"
						alt=""
					/>
				</div>
				<div className="">
					<h2 className="title2-text pb-2">{title}</h2>
					<p className="body-text text-cmp-light-gray">{category}</p>
					<div className="py-8">
						<p className="body-text pb-2 underline">Description</p>
						<p className="body-text pb-4 max-w-sm">{description}</p>
						<p className="body-text underline pb-2">Price</p>
						<p className="boldBody-text">{price} ETH</p>
					</div>

					<Button text="Buy Now" />
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
