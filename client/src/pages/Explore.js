import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Explore = () => {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_CMP_BACKEND_URL}/ad`).then(
			(response) => {
				setItemList(response.data);
			}
		);
	}, []);

	return (
		<div className="py-16">
			<div className="flex flex-col lg:justify-between max-w-4xl mx-auto items-center pb-8">
				<h3 className="title3-text pb-8">Explore</h3>
				<form className="flex">
					<input
						id="title"
						name="title"
						type="text"
						placeholder="Search..."
						className="input-style rounded-none rounded-l-lg"
					/>
					<Button
						type="submit"
						className="shadow-none rounded-none rounded-r-lg"
						text={
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								className="text-2xl shadow-none"
							/>
						}
					/>
				</form>
			</div>
			<div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10 gap-6 place-items-center pb-8">
				{itemList.map((item, index) => (
					<Link key={index} to={`/product/${item.id}`}>
						<Card
							title={item.title}
							image={`${process.env.REACT_APP_CMP_BACKEND_URL}${item.image}`}
							price={item.price}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Explore;
