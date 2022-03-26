import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Sell from "./pages/Sell.js";
import ProfilePage from "./pages/ProfilePage.js";
import { WalletProvider } from "./contexts/WalletContext.js";

function App() {
	return (
		<div className="App">
			<Router>
				<WalletProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/sell" element={<Sell />} />
						<Route path="/profile" element={<ProfilePage />} />
					</Routes>
					<Footer />
				</WalletProvider>
			</Router>
		</div>
	);
}

export default App;
