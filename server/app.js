const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const todoSchema = require("./schema/todo");
const todoResolvers = require("./resolvers/resolver");

// GraphQL schema

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: todoSchema,
    rootValue: todoResolvers,
    graphiql: true,
}))

app.listen(4000, () => {
    console.log("React GraphQL Server is running...");
    console.log("To open GraphQL Interface, access URL to: [http://localhost:4000/graphql]");
});