import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "./search.style.css";

// Contains an input which recieves text input for search Query

const Search = () => {
	const [searchValue, setSearchValue] = useState("");
	const { setFunc } = useContext(AppContext);
	const { setSearchFilter } = setFunc;

	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchValue.length === 0) {
			alert("search cannot be empty");
			return;
		}
		setSearchFilter(searchValue);
	};

	return (
		<div className="search">
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<input
						type="search"
						value={searchValue}
						onChange={handleChange}
						id="search"
						name="search"
						placeholder="Search"
						onSubmit={(e) => e.preventDefault()}
					/>
				</div>
				<button type="submit">submit</button>
			</form>
		</div>
	);
};

export default Search;
