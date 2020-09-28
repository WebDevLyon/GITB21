const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const associationrSchema = mongoose.Schema({
    name: { type: String, required: true, unique:true},
    adresse: { type: String, required: true },
    cp: { type: String, required: true },
    ville: { type: String, required: true },
    responsable:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
});

associationrSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Association", associationrSchema);