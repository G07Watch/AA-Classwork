const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;

const EmblemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  // god: {
  //   type: Schema.Types.ObjectId,
  //   ref: "god"
  // },
  gods: [
    {
      type: Schema.Types.ObjectId,
      ref: "god"
    }
  ],
})

// current id = parent's child id


module.exports = mongoose.model("emblem", EmblemSchema);