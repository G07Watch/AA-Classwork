const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Category = mongoose.model("categories");
const CategoryType = require("./types/category_type");
const Product = mongoose.model("products");
const ProductType = require("./types/product_type");
const UserType = require("./types/user_type")

const AuthService = require("../services/auth");

const axios = require("axios");
const AWSKey = require("../../config/keys.js").AWSKey

const authOptions = {
  method: "GET",
  url:
    "https://5w94q1jc4m.execute-api.us-east-2.amazonaws.com/default/generate_price",
  headers: {
    "x-api-key": AWSKey
  }
};

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    newCategory: {
      type: CategoryType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parentValue, { name }) {
        return new Category({ name }).save();
      }
    },
    deleteCategory: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Category.remove({ _id: id });
      }
    },
    newProduct: {
      type: ProductType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLID },
        description: { type: GraphQLString },
        weight: { type: GraphQLInt }
      },
      resolve(parentValue, { name, category, description, weight }) {
        return axios(authOptions).then(res => {
          let cost = res.data.cost;
          return new Product({ name, category, description, weight, cost }).save();
        })
      }
    },
    deleteProduct: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Product.remove({ _id: id });
      }
    },
    register: {
      type: UserType,
      args: {
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
      },
      resolve(_,args) {
        return AuthService.register(args);
      }
    },
    logout: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      },
      resolve(_, args) {
        return AuthService.logout(args);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.login(args);
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.verifyUser(args);
      }
    }
  }
});

module.exports = mutation;