const bcrypt = require('bcrypt');
//const jwt = require ('jsonwebtoken');

// connection à la base de données
const sqlite3 = require("sqlite3").verbose();
// chemin absolu depuis le serveur backend lancé avec nodemon
const db = new sqlite3.Database("./databases/admins.db",sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message)
    } else {
        console.log("La connection avec la base de données " + "'admins'" + " a été établie");
    }
});

let id = 0;

// On tej les tables pré-existantes
db.run('DROP TABLE admins');
//erreur si décommente car la table existe déjà
db.run('CREATE TABLE IF NOT EXISTS admins(prenom, nom, login, mail, password, id)');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.personne.password, 10)
    .then(hash => {
        // 
        db.run('CREATE TABLE IF NOT EXISTS admins(prenom, nom, login, mail, password, id)');
        // On cherche si le login est déjà utilisé
        const sqlExists = 'SELECT * FROM admins WHERE EXISTS (SELECT * FROM admins WHERE login= ?)'
        db.all(sqlExists,[req.body.personne.login], (err,rows) => {
          if (err) {
            console.log("pas de chance");
            return console.error(err.message);
          } else {
            if (rows.length != 0) {
              res.status(500).json({erreurs: "Pseudo déjà utilisé"})
            } else {
                      // Sinon on peut l'insérer
        console.log("la requête a marché");
            const sqlInsert = 'INSERT INTO admins(prenom, nom, login, mail, password, id) VALUES(?,?,?,?,?,?)';
            id +=1;
            db.run(sqlInsert,[req.body.personne.prenom,req.body.personne.nom,req.body.personne.login,req.body.personne.mail,hash,id], err => { 
              if (err) {
                return console.error(err.message);
              } else {
                console.log("A new admin has been created")
                // affichage
                const requete = 'SELECT * from admins';
                db.all(requete,[],(err,rows) => {
                if (err) {
                    console.log("affichage_erreur");
                    return console.error(err.message);
                } else {
                    console.log("affichage");
                    rows.forEach(row => {
                      console.log(row);
                    })
                  }
                });
              }
              res.status(201).json({msg: "L'admin a été ajouté"});
            });
                }
              }
            });
      })
      .catch(err => res.status(500).json(err));
};


exports.login = (req, res, next) => {
    /*
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              // sing (la chose à encoder, la clé, config pour appliquer une expiration)
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              ),
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
      */
  };
  