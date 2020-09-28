const Player = require('../models/Player');
const User = require('../models/User');


exports.add = (req, res, next) => {
    /*
    TODO: Vérification de la requête par regex
    */
    /*
     TODO: Sauver le player dans la DB
     */
    const player = new Player({
            name: req.body.nom,
            prenom: req.body.prenom,
            mail: req.body.nom.email,
            tel: req.body.tel,
            association: req.body.association,
            optionTournois: req.body.tournoiOption,
        })
        //?vérification du joueur créé ?
    console.log(player);

    //* Enregistrement dans la DB
    player.save()
        .then(() => res.status(201).json({ 'Création du joueur': player }))
        .catch(err => res.status(400).json({ err }))
        //    TODO: Renvoyer erreur ou confirmation de l'enregistrement
};

exports.list=(req, res, next) =>{
console.log(req.query)
    Player.find(req.query).populate('association')
    .then(players=> {res.status(200).json({players})})
    .catch(err=>res.status(400).json({err}))
}