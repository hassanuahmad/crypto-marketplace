import Button from "./Button";
import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./CryptoPayment/ErrorMessage";
import TxList from "./CryptoPayment/TxList";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
	try {
		if (!window.ethereum)
			throw new Error("No crypto wallet found. Please install it.");

		await window.ethereum.send("eth_requestAccounts");
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		ethers.utils.getAddress(addr);
		const tx = await signer.sendTransaction({
			to: addr,
			value: ethers.utils.parseEther(ether),
		});
		console.log({ ether, addr });
		console.log("tx", tx);
		setTxs([tx]);
	} catch (err) {
		setError(err.message);
	}
};

const SingleProductPage = ({
	wallet_address,
	title,
	description,
	category,
	price,
	image
}) => {
	const [error, setError] = useState();
	const [txs, setTxs] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError();
		await startPayment({
			setError,
			setTxs,
			ether: `${price}`,
			addr: wallet_address,
		});
	};

	return (
		<div className="mx-auto w-fit">
			<div className="py-16 px-8 flex flex-col lg:flex-row">
				<div className="pb-2 lg:pr-20">
					<img
						src={image}
						className="rounded-lg max-w-[500px] max-h-[500px]"
						alt=""
					/>
				</div>
				<div>
					<h2 className="title2-text pb-2">{title}</h2>
					<p className="body-text text-cmp-light-gray">{category}</p>
					<div className="py-8">
						<p className="body-text pb-2 underline">Description</p>
						<p className="body-text pb-4 max-w-sm">{description}</p>
						<p className="body-text underline pb-2">Price</p>
						<p className="boldBody-text">{price} ETH</p>
					</div>

					<form onSubmit={handleSubmit}>
						<Button type="submit" text="Buy Now" />
						<ErrorMessage message={error} />
						<TxList txs={txs} />
					</form>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
