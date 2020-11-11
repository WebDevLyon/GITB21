const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const tournoiSchema = mongoose.Schema({
  nom: { type: String, required: true },
  link: { type: String, required: true },
  serie: { type: String, required: true },
  dateLimite: { type: String, required: true },
  adresse: { type: String, required: true },
});

tournoiSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Tournoi", tournoiSchema);
