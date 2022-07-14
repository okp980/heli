import { useQuery } from "@apollo/client";
import { createContext, useState } from "react";
import { GET_ORDERS } from "../query/order";

// Maintains the App State of the App using REACT CONTEXT
// Returns VALUE which holds all the values in an object required by different components
// Returns SETFUNC an object which holds all the mutating functions for changing App state
// Returns LOADING,ERROR, DATA from the Query made from the USEQUERY hook

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
	// filters
	const [namefilter, setNameFilter] = useState(true);
	const [pricefilter, setPriceFilter] = useState(true);
	const [cnamefilter, setCnameFilter] = useState(true);
	const [addressfilter, setAddressFilter] = useState(false);
	const [descriptionfilter, setDescriptionFilter] = useState(false);
	const [phoneFilter, setPhoneFilter] = useState(false);
	const [dobfilter, setDOBFilter] = useState(true);
	const [categoryfilter, setCateoryFilter] = useState(true);
	const [imagefilter, setImageFilter] = useState(false);

	// search
	const [searchFilter, setSearchFilter] = useState("");

	//query
	const { data, loading, error } = useQuery(GET_ORDERS, {
		variables: {
			name: namefilter,
			price: pricefilter,
			c_name: cnamefilter,
			address: addressfilter,
			description: descriptionfilter,
			phone_no: phoneFilter,
			date_of_purchase: dobfilter,
			category: categoryfilter,
			image: imagefilter,
			search: searchFilter,
		},
	});

	const value = {
		namefilter,
		pricefilter,
		cnamefilter,
		addressfilter,
		descriptionfilter,
		phoneFilter,
		dobfilter,
		categoryfilter,
		imagefilter,

		searchFilter,
	};

	const setFunc = {
		setNameFilter,
		setPriceFilter,
		setCnameFilter,
		setAddressFilter,
		setDescriptionFilter,
		setPhoneFilter,
		setDOBFilter,
		setCateoryFilter,
		setImageFilter,

		setSearchFilter,
	};
	return (
		<AppContext.Provider value={{ value, data, loading, error, setFunc }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
