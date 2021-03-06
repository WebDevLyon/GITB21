const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  association: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Association",
    default: null,
  },
  role: { type: Number, default: 1 },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
