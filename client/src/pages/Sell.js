import ListItem from "../components/Sell Page/ListItem";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";

const Sell = () => {
	const { isWalletConnected } = useContext(WalletContext);

	return (
		<div>
			{isWalletConnected ? (
				<ListItem />
			) : (
				<div className="h-40 title3-text text-center py-16">
					Connect Wallet to start selling!
				</div>
			)}
		</div>
	);
};

export default Sell;
