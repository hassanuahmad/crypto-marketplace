import { useState, createContext } from "react";

const WalletContext = createContext();
export default WalletContext;

export const WalletProvider = ({ children }) => {
	const [accountAddress, setAccountAddress] = useState("");
	const [userBalance, setUserBalance] = useState(null);
	const [isWalletConnected, setIsWalletConnected] = useState(false);

	const values = {
		accountAddress,
		setAccountAddress,
		isWalletConnected,
		setIsWalletConnected,
		userBalance,
		setUserBalance,
	};

	return (
		<WalletContext.Provider value={values}>
			{children}
		</WalletContext.Provider>
	);
};
