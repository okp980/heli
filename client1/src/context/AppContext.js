import { useQuery } from "@apollo/client";
import { createContext, useState } from "react";
import { GET_ORDERS } from "../query/order";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
	// filters
	const [namefilter, setNameFilter] = useState(false);
	const [pricefilter, setPriceFilter] = useState(true);
	const [cnamefilter, setCnameFilter] = useState(false);
	const [addressfilter, setAddressFilter] = useState(false);
	const [descriptionfilter, setDescriptionFilter] = useState(false);
	const [phoneFilter, setPhoneFilter] = useState(false);
	const [dobfilter, setDOBFilter] = useState(true);
	const [categoryfilter, setCateoryFilter] = useState(false);
	const [imagefilter, setImageFilter] = useState(true);

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
