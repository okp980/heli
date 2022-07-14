const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = require("./schema/schema");
const order = require("./data/order");
cors = require("cors");

const PORT = 5000;
const app = express();
app.use(cors());

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);
app.listen(PORT);
