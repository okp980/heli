import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./filter.style.css";

// A group of buttons to make filtered query to the server
// clicking a given button toggles the state of a filed to included in a query (TRUE/FALSE)

const Filter = () => {
	const { setFunc } = useContext(AppContext);
	const {
		setNameFilter,
		setPriceFilter,
		setCnameFilter,
		setAddressFilter,
		setDescriptionFilter,
		setPhoneFilter,
		setCateoryFilter,
		setImageFilter,
	} = setFunc;
	return (
		<div className="filter">
			<h2 className="filter-text">Filter Results</h2>
			<div className="btn-group">
				<button onClick={() => setNameFilter((prev) => !prev)}>
					product name
				</button>
				<button onClick={() => setPriceFilter((prev) => !prev)}>price</button>
				<button onClick={() => setCnameFilter((prev) => !prev)}>
					customer name
				</button>
				<button onClick={() => setAddressFilter((prev) => !prev)}>
					address
				</button>
				<button onClick={() => setDescriptionFilter((prev) => !prev)}>
					description
				</button>
				<button onClick={() => setPhoneFilter((prev) => !prev)}>
					phone no
				</button>

				<button onClick={() => setCateoryFilter((prev) => !prev)}>
					category
				</button>
				<button onClick={() => setImageFilter((prev) => !prev)}>image</button>
			</div>
		</div>
	);
};
export default Filter;
