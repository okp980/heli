import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "../../context/AppContext";
import './section.style.css'

// Controls an internal state for deciding what data should be displayed
// Recieves a prop FILTER with PROPTYPE==> "PropTypes.string.isRequired"
// uses the filter prop to filter the data by DATE

const Section = ({ filter }) => {
    const [filteredData, setfilteredData] = useState([]);
    const { data } = useContext(AppContext);


    // Updates the component immediately to the desired data by filtering to get the orders made within the date specified in the filter prop
    useEffect(() => {
        const orders = data.orders
        const newOrder = orders.filter((order) => order.date_of_purchase === filter)
        setfilteredData(newOrder)

    }, [data.orders, filter])
    return (
        <section>
            <div className="section-head">
                <h2>{filter}</h2>
            </div>
            <div className="count">
                <p>Showing {filteredData.length} order{filteredData.length > 1 && 's'} for this date</p>
            </div>
            <div className="lists">
                {filteredData.map((resource, index) => (
                    <div key={index} className='card'>
                        {resource.image && (
                            <div className="image">
                                <img src={resource.image} alt={resource.name} />
                            </div>
                        )}
                        <div className="card-content">
                            {resource.product_name && <p><span>Name:</span> {resource.product_name}</p>}
                            {resource.price && <p><span>Price:</span> {resource.price}</p>}
                            {resource.customer_name && <p><span>Customer Name:</span> {resource.customer_name}</p>}
                            {resource.address && <p><span>Address:</span> {resource.address}</p>}
                            {resource.description && <p><span>Description: </span> {resource.description}</p>}
                            {resource.phone_no && <p><span>Phone No.: </span> {resource.phone_no}</p>}
                            {resource.date_of_purchase && <p><span>Date of Purchase: </span> {resource.date_of_purchase}</p>}
                            {resource.category && <p><span>Category: </span> {resource.category}</p>}
                        </div>
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