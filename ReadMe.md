# Mon fichier pour le frontend
Le site d'Enguerran BEST, pour apprendre le frontend. 

## Set-up 

### général
 Ajouter une Vue.js en CLI.
 => npm install -g @vue/cli
(one shot)

ajouter un router
   =>  vue add router

### quotidien

Lancer vue : 
<br/>

   => créer une application : vue create my-app
<br/>
   => aller (cd) dans le dossier qui a été créé.
<br/>
   => lancer le serveur frontend : npm run serve
<br/>


## Memento

### Routage

2 choses : Le routage =/= url de base
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

### 