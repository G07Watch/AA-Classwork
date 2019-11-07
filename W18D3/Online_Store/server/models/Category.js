const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: false
  }
});

CategorySchema.statics.fetchAllProducts = (categoryId) => {
  const Category = mongoose.model('categories');

  Category.findById(categoryId).then(category =>{
    if (category.products){
      return category.products
    }else{
      return ({ msg: "No products on this category."})
    }
  })
}

module.exports = mongoose.model('categories', CategorySchema);