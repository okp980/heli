import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./totalCount.style.css";

// Shows total count of all the results returned from the Query

const TotalCount = () => {
	const { data } = useContext(AppContext);
	return (
		<div className="total-count">
			<p>
				Total Orders : <span>{data.orders.length}</span>
			</p>
		</div>
	);
};
export default TotalCount;
