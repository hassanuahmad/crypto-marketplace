import Button from "./Button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import WalletContext from "../contexts/WalletContext";

const ConnectButton = ({ className = "", onClick = () => {} }) => {
	const { accountAddress, connectWalletHandler, formatMobileWalletAddress } =
		useContext(WalletContext);

	const handleClick = () => {
		connectWalletHandler();
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
			onClick={handleClick}
			className={className}
		/>
	);
};

export default ConnectButton;
