const orders = require("../data/order");

// schema for the different data types

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLList,
	GraphQLSchema,
} = require("graphql");

const OrderType = new GraphQLObjectType({
	name: "Order",
	fields: () => ({
		id: { type: GraphQLID },
		customer_name: { type: GraphQLString },
		category: { type: GraphQLString },
		description: { type: GraphQLString },
		date_of_purchase: { type: GraphQLString },
		phone_no: { type: GraphQLString },
		price: { type: GraphQLString },
		product_name: { type: GraphQLString },
		address: { type: GraphQLString },
		image: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		order: {
			type: OrderType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return orders.find((order) => order.id === args.id);
			},
		},
		orders: {
			type: GraphQLList(OrderType),
			args: { search: { type: GraphQLString } },
			resolve(parent, args) {
				if (args && args.search) {
					const fliteredOrders = orders.filter((order) =>
						Object.values(order).some((val) =>
							val.toLocaleUpperCase().includes(args.search.toLocaleUpperCase())
						)
					);
					return fliteredOrders;
				}
				return orders;
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
