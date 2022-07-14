import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
	query getOrders(
		$name: Boolean!
		$price: Boolean!
		$c_name: Boolean!
		$address: Boolean!
		$description: Boolean!
		$phone_no: Boolean!
		$date_of_purchase: Boolean!
		$category: Boolean!
		$image: Boolean!
		$search: String
	) {
		orders(search: $search) {
			id
			product_name @include(if: $name)
			price @include(if: $price)
			customer_name @include(if: $c_name)
			address @include(if: $address)
			description @include(if: $description)
			phone_no @include(if: $phone_no)
			date_of_purchase @include(if: $date_of_purchase)
			category @include(if: $category)
			image @include(if: $image)
		}
	}
`;
