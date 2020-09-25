const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const library = require("../library/library");

exports.auth = (req, res, next) => {
  console.log(req.body.userId);
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    console.log("decodetoken", decodedToken);
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      res.status(200).json({ msg: "Token toujours valide" });
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
        association: req.body.association,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ msg: error }));
};

exports.login = (req, res, next) => {
  //vérification si l'user entre un email ou un username
  let TypeShearch;
  //si le champ est entré avec un mail
  if (req.body.account.indexOf("@") !== -1) {
    TypeShearch = { email: req.body.account };
  } //sinon c'est un name
  else {
    TypeShearch = { name: req.body.account };
  }
  User.findOne(TypeShearch)
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
            userId: user._id,
            level: user.level,
            association: user.association,
            token: jwt.sign(
              {
                userId: user._id,
                level: user.level,
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
