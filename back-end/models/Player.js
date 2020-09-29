const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const playerSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    age: { type: Number, required: true },
    mail: { type: String },
    tel: { type: String },
    entrainement: { type: Boolean, default: false },
    competiteur: { type: Boolean, default: false },
    interclub: { type: Boolean, default: false },
    payement: { type: Number },
    modePaiement: { type: String },
    commentaires: { type: String },
    association: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Association'
    },
});

playerSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Player", playerSchema);