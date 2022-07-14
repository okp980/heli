import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import Section from "../components/Section/Section";
import TotalCount from "../components/TotalCount/TotalCount";
import "./home.style.css";

// renders different component to display data info
// SEARCH ===> Responsible for getting input and making a search query
// FILTER ===> Responsible for filtering Query from the server
// TotalCount ====> Responsible for displaying the total count from the fetch query
// Section ====> Responsible for filtering the query results into different sections by their date of purchase

const Home = () => {
	return (
		<div className="Home">
			<div className="header">
				<h1>GraphQL</h1>
			</div>
			<div className="container">
				<Search />
				<Filter />
				<TotalCount />
				<Section filter="02/06/2021" />
				<Section filter="03/06/2021" />
				<Section filter="04/06/2021" />
				<Section filter="05/06/2021" />
				<Section filter="06/06/2021" />
			</div>
		</div>
	);
};
export default Home;
