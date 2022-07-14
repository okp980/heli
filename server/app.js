const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

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
app.listen(PORT, () => {
	console.log(`Server is currently running on http://localhost:5000/graphql`);
});
