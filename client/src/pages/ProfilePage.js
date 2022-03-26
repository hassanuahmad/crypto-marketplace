import Profile from "../components/Profile Page/Profile";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";

const ProfilePage = () => {
	const { isWalletConnected } = useContext(WalletContext);

	return (
		<div>
			{isWalletConnected ? (
				<Profile />
			) : (
				<div className="h-40 title3-text text-center py-16">
					Connect Wallet to see your profile!
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
