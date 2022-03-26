import Button from "./Button";
import { useState } from "react";

async function getAccount() {
	const accounts = await window.ethereum.request({
		method: "eth_requestAccounts",
	});
	const account = accounts[0];

	return account;
}

const ConnectButton = () => {
	const [accountAddress, setAccountAddress] = useState("");

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
	};

	return (
		<Button
			text={!!accountAddress ? accountAddress : "Connect Wallet"}
			onClick={connectButtonOnClick}
		/>
	);
};

export default ConnectButton;
