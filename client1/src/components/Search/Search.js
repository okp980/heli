import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
const Search = () => {
	const [searchValue, setSearchValue] = useState("");
	const { setFunc } = useContext(AppContext);
	const { setSearchFilter } = setFunc;

	// useEffect used to debounce search input
	useEffect(() => {
		let timer = setTimeout(() => {
			setSearchFilter(searchValue);
		}, 1500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchValue]);

	const handleChange = useCallback(
		(e) => {
			setSearchValue(e.target.value);
		},
		[searchValue]
	);
	return (
		<div>
			<form>
				<input type="text" value={searchValue} onChange={handleChange} />
			</form>
		</div>
	);
};

export default Search;
