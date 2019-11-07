const graphql = require("graphql");
const { GraphQLSchema } = graphql;

const query = require("./types/root_query");
const mutation = require("./mutations.js");

module.exports = new GraphQLSchema({
  query,
  mutation
});