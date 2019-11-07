const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const ProductType = new GraphQLObjectType({
  name: 'ProductType',

  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLID },
    description: { type: GraphQLString },
    weight: { type: GraphQLInt },
    cost: { type: GraphQLInt }
  })
});

module.exports = ProductType;