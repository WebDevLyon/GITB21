const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const associationrSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  adresse: { type: String, required: true },
  cp: { type: String, required: true },
  ville: { type: String, required: true },
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
  config: {
    badisteTounois: { type: String, default: null },
  },
});

associationrSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Association", associationrSchema);
