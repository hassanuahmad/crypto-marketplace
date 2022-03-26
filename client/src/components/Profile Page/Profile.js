import React from "react";
import Button from "../Button";
import Jazzicon from "react-jazzicon";

const Profile = () => {
	return (
		<div className="py-16">
			<div className="flex flex-col items-center">
				<Jazzicon
					diameter={100}
					seed={Math.round(Math.random() * 10000000)}
				/>
				<p className="body-text pb-2 pt-4">
					`Wallet: <span className="boldBody-text">${}</span> `
				</p>
				<p className="body-text">
					`Balance: <span className="boldBody-text">${}</span> `
				</p>
				<div className="pt-10 flex flex-col">
					<Button className="mb-4" text="Disconnect" />
					<label className="pb-2" htmlFor="">
						Email Address
					</label>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Email"
						className="input-style"
					/>
				</div>
			</div>
		</div>
	);
};

export default Profile;
