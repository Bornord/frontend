<template>
    <section>
        <br/>
        <div class="wrapper">
            <div>
            Identifiant :
            </div>
            <div>
            <input
                type="text"
                id="1"
                :name="1"
                value="identifiant"
            >
            </div>
            <div></div>
            <div>
            Adresse mail :
            </div>
            <div>
            <input
                type="text"
                id="2"
                :name="2"
                value="mail"
            >
            </div>
            <div></div>
            <div>
            Mot de passe :
            </div>
            <div>
            <input
                type="password"
                id="3"
                :name="3"
                value="mot de passe"
            >
            </div>
            <div>
              <button type="button"> 
                    <img 
                        id = "7"
                        src="../assets/oeilOuvert.png" 
                        height ="10" 
                        width="20"
                        @click = "visualisation(1)" 
                    />
                </button>
            </div>
            <div>
                Confirmation du mot de passe :
            </div>
            <div>
            <input
                type="password"
                id="4"
                :name="4"
                value="confirmation"
            >
            </div>
            <div>
                <button type="button"> 
                    <img 
                        id = "8"
                        src="../assets/oeilOuvert.png" 
                        height ="10" 
                        width="20"
                        @click = "visualisation(2)" 
                    />
                </button>
                <!-- <input 
                    type="checkbox" 
                    id="6"
                    @click="visualisation(2)" 
                    value="afficher"
                > -->
            </div>
            <div></div>
            <div class="gauche">
                <input
                    type="button"
                    id = "9"
                    :name = "9"
                    value = "Valider"
                    @click = envoyer()
                >
            </div>
        </div>

    </section>
</template>

<script>
// @ is an alias to /src

import {HTTP} from '../services/api'


export default {
  name: 'SignupVue',
  components: {
  },
  data () {
      return {
            message: '',
            erreurs: '',
            personne: {
              prenom: '',
              nom: '',
            success: 'false',
          }
      }
  },
  methods: {
      visualisation(i) {
        var element;
        var image;
        if (i===1) {
            element = document.getElementById('3');
            image = document.getElementById('7');
        } else if (i===2) {
            element = document.getElementById('4');
            image = document.getElementById('8')
        } else {
            console.log("Erreur inattendue");
        }
        if (element.type === "password") {
            console.log("password");
            element.type = "text";
            image.src = "https://c8.alamy.com/compfr/2e2fp5n/pas-d-oeil-icone-en-forme-de-globe-oculaire-barre-noir-concept-d-eviter-regarder-le-secret-confidentiel-cache-comme-le-mot-de-passe-symbole-vectoriel-isole-sur-fond-blanc-2e2fp5n.jpg"
            console.log("image: "+ image.src);
        } else if (element.type === "text") {
            console.log("text");
            element.type="password";
            image.src = "https://cdn-icons-png.flaticon.com/512/66/66880.png"
            console.log("image: "+ image.src);
        } else {
            console.log("Erreur inattendue");
        }
      },
      envoie() {
        HTTP.post('/api/signup',{
            personne: {
                login: document.getElementById('1'),
                mail: document.getElementById('2'),
                password: document.getElementById('3'),
                password_bis: document.getElementById('4'),
            }
        })
        .then(response => {
          console.log(response);
          // cela demande de bien comprendre la structure de données du backend
          this.personne = response.data.msg
        })
        .catch(e => {
          this.errors = e
        })
      }

  }

}
</script>

<style scoped lang="scss">

.wrapper{
    display: grid;
    width: 100%;  
    height: 100px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 250px 1fr 4fr;
    text-align: left;
    padding: 10px;
    gap: 10px 0px;
}

.gauche{
    text-align: right;
    padding: 40px 32px 10px 10px
}


</style>