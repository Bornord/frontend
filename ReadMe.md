# Mon fichier pour le frontend
Le site d'Enguerran BEST, pour apprendre le frontend. 

## Set-up 

### général
 Ajouter une Vue.js en CLI.
 => npm install -g @vue/cli
(one shot)

ajouter un router:  
   =>  vue add router

ajouter axios : 
   => npm install axios

lancer moongoDB :  
   => npm install mongoose

lancer Sqlite3 :  
   => npm install sqlite3

lancer le package de cryptage de mot de passe bcrypt :  
   => npm install bcrypt

lancer le package de générateur de token web jsonwebtoken :  
   => npm install jsonwebtoken

Ajouter une application vue :  
   => créer une application : vue create my-app

Ajouter un data store : 
   => vue add vuex

Ajouter une persitance des données via stockage global : 
   => npm install --save vuex-persistedstate

Ajout du module de cookie : 
   => npm install vue-cookies

### quotidien

Lancer le service web : 

Terminal 1 (lancer le frontend) : 
> cd $HOME/githubPath/Communication/frontend  
 => lancer le serveur vuejs :   
> npm run serve  

Terminal 2 (lancer le backend) : 
> cd $HOME/githubPath/Communication/backend  
 => lancer le serveur node :  
> nodemon Server  

## Memento

### Routage

2 choses : Le routage =/= url de base
<br/>
UPDATE : VRAI, SI on a refusé le history mode lors de la configuration du router. 
<br/>
Si on a config avec ce mode, c'est pareil :-)
<br/>
<br/>
Routage : aiguillage DANS l'app PAR l'app
<br/>
URL : aiguillage DANS l'app PAR le client
<br/>
=> Le routage ne prend pas en compte les URL rentrées par le client, mais uniquement celle de l'app
<br/>
<br/>
Routage statique et routage dynamique, sur le principe c'est pareil. 
<br/>
Ce qui change, c'est que l'on peut afficher des éléments de l'URL dans le contenu HTMLs

### Backend

<br/> Penser à installer express 
<br/> npm install express
<br/> nodemon <nomDuServeur>

commentaire dans n'imp langage : cmd + shift + /
tips : interpréter des props réactives ":nomPropre"
exemple: id="personne.prenom + personne.nom"

### SQL
Le chemin à l'air d'être absolu  
(depuis le fichier lancé avec Nodemon et non le fichier qui exploite la DB)
const db = new sqlite3.Database("./databases/personnes.db",sqlite3.OPEN_READWRITE, (err) => {
