import Home from "./pages/Home.js";
import Navbar from "./components/nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
