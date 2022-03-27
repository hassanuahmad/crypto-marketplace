import { useEffect, useState } from "react";
import SingleProductPage from "../components/SingleProductPage";
import { useParams } from "react-router-dom";
import Axios from "axios";

const { REACT_APP_CMP_BACKEND_URL } = process.env;

const ProductPage = () => {
	const { id } = useParams();
	const [productData, setProductData] = useState({});

	useEffect(() => {
		console.log(`attempting to fetch ad ${id}`);
		Axios.get(`${REACT_APP_CMP_BACKEND_URL}/ad/${id}`)
			.then((response) => {
				setProductData(response.data);
			})
			.catch((error) => {
				// handle error
				console.error(error);
			});
	}, []);

	return (
		<div>
			{productData.id ? (
				<SingleProductPage
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
