import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import Sell from "./pages/Sell.js";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sell" element={<Sell />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
