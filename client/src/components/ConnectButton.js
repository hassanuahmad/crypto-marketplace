import Button from "./Button";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import WalletContext from "../contexts/WalletContext";

async function getAccount() {
	const accounts = await window.ethereum.request({
		method: "eth_requestAccounts",
	});
	const account = accounts[0];

	return account;
}

const ConnectButton = ({className="", onClick=()=>{}}) => {
	const { accountAddress, setAccountAddress } = useContext(WalletContext);

	const formatMobileWalletAddress = () => {
		return `${accountAddress.substring(0, 7)}...${accountAddress.substring(
			accountAddress.length - 5
		)}`;
	};

	const connectButtonOnClick = () => {
		console.log(window);
		if (
			typeof window !== "undefined" &&
			typeof window.ethereum !== "undefined"
		) {
			getAccount().then((response) => {
				setAccountAddress(response);
			});
		} else {
			console.log("error");
		}

		onClick();
	};

	return (
		<Button
			outline
			text={
				!!accountAddress ? (
					<Link to="/profile">{formatMobileWalletAddress()}</Link>
				) : (
					"Connect Wallet"
				)
			}
			onClick={connectButtonOnClick}
			className={className}
		/>
	);
};

export default ConnectButton;
