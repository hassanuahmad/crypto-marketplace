import Axios from "axios";
import { useState, useEffect } from "react";
import shoe from "../../assets/images/shoe.png";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const LatestItems = () => {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_CMP_BACKEND_URL}/ad`).then(
			(response) => {
				setItemList(response.data);
			}
		);
	}, []);

	return (
		<div className="pb-16">
			<h3 className="title3-text text-center pb-8">Latest Items</h3>
			<div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 place-items-center pb-8">
				{itemList.map(
					(item, index) =>
						index < 6 && (
							<Link key={index} to={`/product/${item.id}`}>
								<Card
									title={item.title}
									price={item.price}
									image={`${process.env.REACT_APP_CMP_BACKEND_URL}${item.image}`}
								/>
							</Link>
						)
				)}
			</div>
		</div>
	);
};

export default LatestItems;
