const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require('./user_type');
const CategoryType = require('./category_type');
const ProductType = require('./product_type');

const User = require('../../models/User');
const Category = require("../../models/Category");
const Product = require("../../models/Product");

// const axios = require("axios");
// const AWSKey = require("../../../config/keys.js").AWSKey

// const authOptions = {
//   method: "GET",
//   url:
//     "https://5w94q1jc4m.execute-api.us-east-2.amazonaws.com/default/generate_price",
//   headers: {
//     "x-api-key": AWSKey
//   }
// };

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(_, args) {
        return User.findById(args._id);
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve(){
        return Category.find({});
      }
    },
    category: {
      type: CategoryType,
      args: {_id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, args) {
        return Category.findById(args._id);
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return Product.find({});
      }
    },
    product: {
      type: ProductType,
      args: {_id: { type: new GraphQLNonNull(GraphQLID) }},
      resolve(_, args) {
        return Product.findById(args._id)
      }
    }
  })
});

module.exports = RootQueryType;