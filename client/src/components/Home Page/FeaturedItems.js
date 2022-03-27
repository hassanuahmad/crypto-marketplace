import Axios from "axios";
import { useState, useEffect } from "react";
import shoe from "../../assets/images/shoe.png";
import { Link } from "react-router-dom";

const { REACT_APP_CMP_BACKEND_URL } = process.env;

const FeaturedItems = () => {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		Axios.get(`${REACT_APP_CMP_BACKEND_URL}/ad`).then((response) => {
			setItemList(response.data);
			console.log(response.data);
		});
	}, []);

	return (
		<div className="pb-16">
			<h3 className="title3-text text-center pb-8">Featured Items</h3>
			<div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 place-items-center pb-8">
				{itemList.map((item, index) => (
					<Link key={index} to={`/product/${item.id}`}>
						<div className="p-4 hover:shadow-lg rounded-xl border">
							<img
								src={shoe}
								className="rounded-xl pb-2 bg-contain w-60 h-60"
								alt=""
							/>
							<p className="subtitle-text pb-2">{item.title}</p>
							<p className="body-text">Price</p>
							<p className="boldBody-text text-cmp-primary">
								{item.price} ETH
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default FeaturedItems;
