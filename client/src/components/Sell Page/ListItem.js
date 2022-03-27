import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletContext from '../../contexts/WalletContext';

const ListItem = () => {
	const [image, setImage] = useState();

	const navigate = useNavigate();
	const {accountAddress} = useContext(WalletContext);

	const formik = useFormik({
		initialValues: {
			title: "",
			description: "",
			category: "",
			price: "",
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.max(30, "Must be 30 characters or less")
				.required("Required"),
			description: Yup.string()
				.max(355, "Must be 355 characters or less")
				.required("Required"),
			price: Yup.number().required("Required"),
		}),

		onSubmit: (values) => {
			const formData = new FormData();
			formData.append("wallet_address", accountAddress);
			formData.append("title", values.title);
			formData.append("description", values.description);
			formData.append("category", values.category);
			formData.append("price", values.price);
			formData.append("image", image);
			Axios.post(
				`${process.env.REACT_APP_CMP_BACKEND_URL}/ad/create`,
				formData,
				{ headers: { "Content-Type": "multipart/form-data" } }
			)
				.then(() => {
					navigate('/');
				})
				.catch((err) => {
					console.log(err.response);
				});
			console.log(values, image);
		},
	});

	return (
		<div className="py-16 flex flex-col items-center">
			<p className="title3-text pb-8">List Item</p>
			<form
				onSubmit={formik.handleSubmit}
				className="w-80"
				encType="multipart/form-data"
			>
				<div className="flex flex-col body-text pb-10">
					<label className="pb-2" htmlFor="">
						Attach a file
					</label>
					<input
						id="file"
						name="file"
						type="file"
						className="input-style"
						onChange={(event) => {
							setImage(event.currentTarget.files[0]);
						}}
						value={formik.values.image}
					/>
				</div>
				<div className="flex flex-col body-text">
					<label className="pb-2" htmlFor="">
						Title
					</label>
					<input
						id="title"
						name="title"
						type="text"
						placeholder="Title"
						className="input-style"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.title}
					/>
					{formik.touched.title && formik.errors.title ? (
						<p className="form-error">{formik.errors.title}</p>
					) : null}
				</div>
				<div className="flex flex-col body-text py-10">
					<label className="pb-2" htmlFor="">
						Description
					</label>
					<textarea
						id="description"
						name="description"
						placeholder="Description"
						className="input-style h-40 max-h-80"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.description}
					/>
					{formik.touched.description && formik.errors.description ? (
						<p className="form-error">
							{formik.errors.description}
						</p>
					) : null}
				</div>
				<div className="flex flex-col body-text">
					<label className="pb-2" htmlFor="">
						Category
					</label>
					<select
						id="category"
						required
						name="category"
						className="no-style input-style"
						onChange={formik.handleChange}
						value={formik.values.category}
					>
						<option value="" label="Select a category">
							Select
						</option>
						<option value="electronics" label="electronics">
							Electronics
						</option>
						<option value="books" label="books">
							Books
						</option>
						<option value="clothing" label="clothing">
							Clothing
						</option>
						<option value="furniture" label="furniture">
							Furniture
						</option>
						<option value="tools" label="tools">
							Tools
						</option>
					</select>
				</div>
				<div className="flex flex-col body-text py-10">
					<label className="pb-2" htmlFor="">
						Price
					</label>
					<input
						id="price"
						name="price"
						type="number"
						placeholder="Price"
						className="input-style"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.price}
					/>
					{formik.touched.price && formik.errors.price ? (
						<p className="form-error">{formik.errors.price}</p>
					) : null}
				</div>

				<Button type="submit" text="List" className="w-80" />
			</form>
		</div>
	);
};

export default ListItem;
