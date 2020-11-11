const User = require("../models/User");
const Association = require("../models/Association");
const Player = require("../models/Player");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.autoLog = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    if (!userId) {
      throw "Invalid user Token";
    } else {
      User.findOne({ _id: userId })
        .populate({ path: "association", populate: { path: "joueurs" } })
        .then((user) => {
          res.status(200).json(user);
        })
        .catch((error) => res.status(500).json({ error }));
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) =>
          res.status(400).json({ error: "Cet email est déjà utilisé" })
        );
    })
    .catch((error) => res.status(500).json({ msg: error }));
};

exports.login = (req, res, next) => {
  //On cherche l'user et charge toutes les infos sur l'association et les joueurs de l'association
  User.findOne({ email: req.body.account })
    .populate({ path: "association", populate: { path: "joueurs" } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            console.log(valid);
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            name: user.name,
            email: user.email,
            userId: user._id,
            role: user.role,
            association: user.association,
            token: jwt.sign(
              {
                userId: user._id,
                level: user.role,
              },
              "RANDOM_TOKEN_SECRET",
              { expiresIn: "24h" }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
