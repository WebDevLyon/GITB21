const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    association: { type: String, required: true },
    level: { type: Number, default: 3 }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);