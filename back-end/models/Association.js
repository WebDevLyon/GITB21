const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const associationrSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  adresse: { type: String },
  cp: { type: String },
  ville: { type: String },
  responsable: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  joueurs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  tournoisSelected: { type: Array, default: null },
});

associationrSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Association", associationrSchema);
