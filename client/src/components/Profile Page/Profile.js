import React, { useContext } from "react";
import Jazzicon from "react-jazzicon";
import WalletContext from "../../contexts/WalletContext";
import Button from "../../components/Button";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const Profile = () => {
	const { userBalance, formatMobileWalletAddress } =
		useContext(WalletContext);

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required(),
		}),

		onSubmit: (values) => {
			Axios.post("", {});
			console.log(values);
		},
	});

	return (
		<div className="py-16">
			<div className="flex flex-col items-center">
				<Jazzicon
					diameter={100}
					seed={Math.round(Math.random() * 10000000)}
				/>
				<p className="body-text pb-2 pt-4">
					Wallet:{" "}
					<span className="boldBody-text">
						{formatMobileWalletAddress()}
					</span>
				</p>
				<p className="body-text">
					Balance:{" "}
					<span className="boldBody-text">{userBalance} ETH</span>
				</p>
				<div className="pt-10 flex flex-col">
					<form onSubmit={formik.handleSubmit} className="flex">
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							className="input-style rounded-none rounded-l-lg"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
						/>

						<Button
							type="submit"
							className="shadow-none rounded-none rounded-r-lg"
							text={
								<FontAwesomeIcon
									icon={faCircleArrowRight}
									className="text-2xl shadow-none"
								/>
							}
						/>
					</form>
					{formik.touched.email && formik.errors.email ? (
						<p className="form-error">{formik.errors.email}</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Profile;
