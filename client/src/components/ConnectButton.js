import Button from "./Button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import WalletContext from "../contexts/WalletContext";
import { ethers } from "ethers";

const ConnectButton = ({ className = "", onClick = () => {} }) => {
	const { accountAddress, setAccountAddress } = useContext(WalletContext);
	const { setUserBalance } = useContext(WalletContext);
	const { setIsWalletConnected } = useContext(WalletContext);

	const formatMobileWalletAddress = () => {
		return `${accountAddress.substring(0, 7)}...${accountAddress.substring(
			accountAddress.length - 5
		)}`;
	};

	const connectWalletHandler = () => {
		if (window.ethereum) {
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then((result) => {
					accountChangeHandler(result[0]);
				});
		} else {
			console.log("error");
		}

		onClick();
	};

	const accountChangeHandler = (newAccount) => {
		setAccountAddress(newAccount);
		setIsWalletConnected(true);
		getAccountBalance(newAccount);
	};

	const getAccountBalance = (account) => {
		window.ethereum
			.request({ method: "eth_getBalance", params: [account, "latest"] })
			.then((balance) => {
				setUserBalance(ethers.utils.formatEther(balance));
			})
			.catch((error) => {
				console.log(error);
			});
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
			onClick={connectWalletHandler}
			className={className}
		/>
	);
};

export default ConnectButton;
