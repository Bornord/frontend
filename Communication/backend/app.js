const express = require('express');
// database
const app = express();


/* 
Déclaration des permissions 
- Cela inclut l'origine des utilisateurs qui peuvent faire des requêtes.
- (jsp)
- Les méthodes autorisées.
*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/greetings', (req,res,next) => {
    console.log("all's fine");
    res.status(201).json({msg: "hello world back"});
});

module.exports = app;
