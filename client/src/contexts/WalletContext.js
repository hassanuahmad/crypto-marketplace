import { useState, createContext } from "react";

const WalletContext = createContext();
export default WalletContext;

export const WalletProvider = ({ children }) => {
	const [accountAddress, setAccountAddress] = useState("");
	const [isWalletConnected, setIsWalletConnected] = useState(false);

	const values = {
		accountAddress,
		setAccountAddress,
		isWalletConnected,
		setIsWalletConnected,
	};

	return (
		<WalletContext.Provider value={values}>
			{children}
		</WalletContext.Provider>
	);
};
