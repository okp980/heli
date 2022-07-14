import { useContext } from "react";
import "./App.css";
import Home from "./container/Home";
import { AppContext } from "./context/AppContext";

function App() {
	const { loading, error } = useContext(AppContext);
	if (loading) return <p>loading...</p>;
	if (error) return <p>error</p>;
	return <Home />;
}

export default App;
