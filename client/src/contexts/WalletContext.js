import { useState, createContext } from "react";
import { ethers } from "ethers";

const WalletContext = createContext();
export default WalletContext;

export const WalletProvider = ({ children }) => {
	const [accountAddress, setAccountAddress] = useState("");
	const [userBalance, setUserBalance] = useState(null);
	const [isWalletConnected, setIsWalletConnected] = useState(false);

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

	const values = {
		accountAddress,
		setAccountAddress,
		isWalletConnected,
		setIsWalletConnected,
		userBalance,
		setUserBalance,
		connectWalletHandler,
		formatMobileWalletAddress,
	};

	return (
		<WalletContext.Provider value={values}>
			{children}
		</WalletContext.Provider>
	);
};
