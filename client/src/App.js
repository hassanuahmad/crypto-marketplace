import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Sell from "./pages/Sell.js";
import Explore from "./pages/Explore.js";
import ProfilePage from "./pages/ProfilePage.js";
import { WalletProvider } from "./contexts/WalletContext.js";
import ProductPage from "./pages/ProductPage.js";

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
						<Route path="/explore" element={<Explore />} />
						<Route path="/product" element={<ProductPage />} />
					</Routes>
					<Footer />
				</WalletProvider>
			</Router>
		</div>
	);
}

export default App;
