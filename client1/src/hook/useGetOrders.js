import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../query/order";

const useGetOrders = ({ filter }) => {
	const { data, loading, error } = useQuery(GET_ORDERS, {
		variables: filter,
	});
	return { data, loading, error };
};
export default useGetOrders;
