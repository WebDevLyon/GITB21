const Player = require('../models/Player');
const User = require('../models/User');
const Association = require('../models/Association');


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

exports.list = (req, res, next) => {
    console.log(req.query)
    Player.find(req.query).populate('association')
        .then(players => { res.status(200).json({ players }) })
        .catch(err => res.status(400).json({ err }))
}

exports.addBD = (req, res, next) => {
    Player.find()
        .then(players => {
            Association.findOne({ _id: players[0].association })
                .then(asso => {
                    players.forEach(player => {
                        asso.joueurs.push(player)
                    })
                    console.log('table joueurs', asso.joueurs)
                    asso.save().then(() => res.status(201).json({ msg: 'reussi' }))
                        .catch(err => res.status(400).json({ err }))

                    next()
                })

        })
        .catch(err => { console.log(err); next() })
}