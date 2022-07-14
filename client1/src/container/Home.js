import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import Section from "../components/Section";

const Home = () => {
	return (
		<div className="App">
			<div className="container">
				<Search />
				<Filter />
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
