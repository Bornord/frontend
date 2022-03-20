const sqlite3 = require("sqlite3").verbose();
// chemin absolu depuis le serveur backend lancé avec nodemon
const db = new sqlite3.Database("../databases/personnes.db",sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message)
    } else {
        console.log("connection successful");
    }
});

// erreur si décommente car la table existe déjà
//db.run('CREATE TABLE personnes(prenom, nom, id)');

/*
const sql = 'INSERT INTO personnes(prenom, nom, id) VALUES(?,?,?)';
db.run(sql,['Enguerran','BEST','0'], err => {
    if (err) {
        return console.error(err.message);
    } else {
        console.log("A new row has been creadted")
    }
});
*/
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

db.close(err => {
    if (err) {
        console.error(err.message);
    }
})