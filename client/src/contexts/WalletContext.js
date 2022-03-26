import { useState, createContext } from "react";

const WalletContext = createContext();
export default WalletContext;

export const WalletProvider = ({ children }) => {
	const [accountAddress, setAccountAddress] = useState("");

	const values = {
		accountAddress,
		setAccountAddress,
	};

	return (
		<WalletContext.Provider value={values}>{children}</WalletContext.Provider>
	);
};
