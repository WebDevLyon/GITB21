const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const playerSchema = mongoose.Schema({
    name: { type: String, required: true },
    prenom: { type: String, required: true },
    mail: { type: String },
    tel: { type: String },
    association: { type: String, required: true },
    optionTournois: { type: Boolean, default: false },
    renouvellementOption: { type: Boolean, default: false },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Player", playerSchema);