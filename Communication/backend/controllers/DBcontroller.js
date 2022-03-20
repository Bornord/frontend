const sqlite3 = require("sqlite3").verbose();
// chemin absolu depuis le serveur backend lancé avec nodemon
const db = new sqlite3.Database("./databases/personnes.db",sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message)
    } else {
        console.log("La connection avec la base de données a été établie");
    }
});

let id = 0;

//erreur si décommente car la table existe déjà
db.run('CREATE TABLE IF NOT EXISTS personnes(prenom, nom, id)');
// effacer la table
//db.run('DROP TABLE personnes');

/*
const sql = 'INSERT INTO personnes(prenom, nom, id) VALUES(?,?,?)';
db.run(sql,['Enguerran','BEST','2'], err => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log("A new row has been creadted")
    }
});
*/


exports.testSQL = (req,res,next) => {
    res.status(200).json({resp: "le message '" + req.body.message+ "' a été reçu et traité"});
}

exports.afficher = (req,res,next) => {
        db.run('CREATE TABLE IF NOT EXISTS personnes(prenom, nom, id)');
        db.serialize(function () {
          db.all('SELECT * FROM personnes', function (err,row) {
            res.json(row);
          });
        });
          /*
    let run =[];
    const sql = 'SELECT * from personnes';
    db.serialize(function () {
        db.all(sql,[],(err,rows) =>{
        if (err) {
            return console.error(err.message);
        } else {
            rows.forEach(row => {
                db.push(row);
            });
            console.log(db)
        }})
        res.json({resp: "ok"})
    });
    */
};

exports.ajoutP = (req,res,next) => {
    db.run('CREATE TABLE IF NOT EXISTS personnes(prenom, nom, id)');
    const sql = 'INSERT INTO personnes(prenom, nom, id) VALUES(?,?,?)';
    id +=1;
    db.run(sql,[req.body.prenom,req.body.nom,id], err => { 
        if (err) {
            return console.error(err.message);
        } else {
            console.log("A new row has been creadted")
        }
        res.status(201).json({msg: "L'ajout a bien été effectué"});
    });
}

exports.effacer = (req,res,next) => {
    db.run('CREATE TABLE IF NOT EXISTS personnes(prenom, nom, id)');
    db.run('DROP TABLE personnes');
    res.status(200).json({msg: "La base a été effacée."})
}


/*
const sql = 'INSERT INTO personnes(prenom, nom, id) VALUES(?,?,?)';
db.run(sql,['Enguerran','BEST','0'], err => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log("A new row has been creadted")
    }
});

const sql = 'SELECT * from personnes';
db.all(sql,[],(err,rows) =>{
    if (err) {
        return console.error(err.message);
    } else {
        rows.forEach(row => {
            console.log(row);
        })
    }
})

*/

