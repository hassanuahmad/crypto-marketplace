import { useEffect, useState } from "react";
import SingleProductPage from "../components/SingleProductPage";
import { useParams } from "react-router-dom";
import Axios from "axios";

const ProductPage = () => {
	const { id } = useParams();
	const [productData, setProductData] = useState({});

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_CMP_BACKEND_URL}/ad/${id}`)
			.then((response) => {
				console.log(response.data);
				setProductData(response.data);
			})
			.catch((error) => {
				// handle error
				// console.error(error);
			});
	}, []);

	return (
		<div>
			{productData.id ? (
				<SingleProductPage
					wallet_address={productData.wallet_address}
					title={productData.title}
					description={productData.description}
					category={productData.category}
					price={productData.price}
				/>
			) : (
				<div className="h-40 title3-text text-center py-16">
					Product Doesn't Exist
				</div>
			)}
		</div>
	);
};

export default ProductPage;
