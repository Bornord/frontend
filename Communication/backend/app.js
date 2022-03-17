const express = require('express');
// database
const app = express();
const Routes = require('./routers/router');
 

// database
//const mongoose = require('mongoose');
//const stuffRoutes = require('./router/thingRouter');
//const userRoutes = require('./router/userRouter');

/*
// mongoDB init
mongoose.connect('mongodb+srv://Bornord:Bornord56@cluster0.9i3ay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
*/

app.use(express.json());


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
/*  
app.use('/api/ajoutPersonne', (req,res,next) => {
    res.status(201).json({msg: ""});
});
*/

app.use('/api/ajoutPersonne',Routes);

app.use('/greetings', (req,res,next) => {
  console.log("all's fine");
  res.status(201).json({msg: "hello world back"});
});


// On indique les routes où l'on va écouter
//app.use('/api/stuff',stuffRoutes);
//app.use('/api/auth',userRoutes);

module.exports = app;






