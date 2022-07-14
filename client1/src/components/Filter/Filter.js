import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

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
			<button onClick={() => setNameFilter((prev) => !prev)}>
				product name
			</button>
			<button onClick={() => setPriceFilter((prev) => !prev)}>price</button>
			<button onClick={() => setCnameFilter((prev) => !prev)}>
				customer name
			</button>
			<button onClick={() => setAddressFilter((prev) => !prev)}>address</button>
			<button onClick={() => setDescriptionFilter((prev) => !prev)}>
				description
			</button>
			<button onClick={() => setPhoneFilter((prev) => !prev)}>phone no</button>
			{/* <button onClick={() => setDOBFilter((prev) => !prev)}>
						date of purchase
					</button> */}
			<button onClick={() => setCateoryFilter((prev) => !prev)}>
				category
			</button>
			<button onClick={() => setImageFilter((prev) => !prev)}>image</button>
		</div>
	);
};
export default Filter;
