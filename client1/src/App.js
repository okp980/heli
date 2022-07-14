import { useContext } from "react";
import "./App.css";
import Home from "./container/Home";
import { AppContext } from "./context/AppContext";

// receives LOADING AND ERROR STATE
//  if when app is making a Query to the server, the app is in LOADING STATE and displays LOADING...
// if an error occurs trying to fetch data, an ERROR STATE is displayed
// if data is successfully retrieved, the HOME component is rendered with the gotten data

function App() {
	const { loading, error } = useContext(AppContext);
	if (loading) return <h3 className="center">loading...</h3>;
	if (error) return <h3 className="center">Error Occurred</h3>;
	return <Home />;
}

export default App;
