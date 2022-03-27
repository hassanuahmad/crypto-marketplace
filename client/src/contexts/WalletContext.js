import { useState, createContext } from "react";
import { ethers } from "ethers";
import Axios from "axios";

const WalletContext = createContext();
export default WalletContext;

export const WalletProvider = ({ children }) => {
	const [accountAddress, setAccountAddress] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [isWalletConnected, setIsWalletConnected] = useState(false);

	const sendWalletAddressBackend = (walletAddress) => {
		Axios.post(`${process.env.REACT_APP_CMP_BACKEND_URL}/user/add/`, {
			wallet_address: walletAddress,
		}).then((response) => {
			console.log(response);
		});
	};

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
		sendWalletAddressBackend(newAccount);
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

	const disconnectAccount = () => {
		setAccountAddress(null);
		setIsWalletConnected(false);
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
		disconnectAccount,
	};

	return (
		<WalletContext.Provider value={values}>
			{children}
		</WalletContext.Provider>
	);
};
