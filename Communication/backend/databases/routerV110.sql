const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./persons');

db.each("select * from personne where id >?", [2], function(err,row) {
    if (err) {
        console.log(err);
    } else {
        console.log(row.nom + "(" + row.id + ") a écrit '" + roww.content + "'");
    }
});