import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "../context/AppContext";

const Section = ({ filter }) => {
    const [filteredData, setfilteredData] = useState([]);
    const { data } = useContext(AppContext);


    useEffect(() => {
        const orders = data.orders
        const newOrder = orders.filter((order) => order.date_of_purchase === filter)
        setfilteredData(newOrder)

    }, [data.orders, filter])
    return (
        <section>
            <h2>{filter}</h2>
            <div className="lists">
                {filteredData.map((resource, index) => (
                    <div key={index}>
                        {resource.image && (
                            <div className="image">
                                <img src={resource.image} alt={resource.name} />
                            </div>
                        )}
                        {resource.product_name && <p>{resource.product_name}</p>}
                        {resource.price && <p>{resource.price}</p>}
                        {resource.customer_name && <p>{resource.customer_name}</p>}
                        {resource.address && <p>{resource.address}</p>}
                        {resource.description && <p>{resource.description}</p>}
                        {resource.phone_no && <p>{resource.phone_no}</p>}
                        {resource.date_of_purchase && <p>{resource.date_of_purchase}</p>}
                        {resource.category && <p>{resource.category}</p>}
                    </div>
                ))}
            </div>
        </section>
    )
}
Section.propTypes = {
    filter: PropTypes.string.isRequired
}

export default Section