<template>
  <section class="section">
    <div class="section__top">
      <h2 class="section__top__head">Joueurs</h2>
      <div
        class="section__top__btnAdd"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="showModal"
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-person-plus-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </div>
    </div>
    <div class="players">
      <Card
        class="players__card"
        v-for="(joueur,index) of allJoueurs"
        :key="index"
        :joueur="joueur"
      />
    </div>
    <transition name="fade">
      <!-- <ModalBox v-show="isModalVisible" @close="closeModal" /> -->
      <ModalBox v-show="isModalVisible" @close="closeModal" @valid="sendNewPlayer">
        <div slot="header">
          <h4>Ajout d'un joueur à la base de données</h4>
        </div>
        <div slot="body">
          <form action method="get" class="form">
            <div class="form__group">
              <label for="nom">Nom:</label>
              <input type="text" name="name" id="nom" required />
            </div>
            <div class="form__group">
              <label for="prenom">Prénom:</label>
              <input type="text" name="name" id="prenom" required />
            </div>
            <div class="form__group">
              <label for="email">Email:</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div class="form__group">
              <label for="tel">Tel:</label>
              <input type="tel" name="tel" id="tel" required />
            </div>
            <div class="form__group">
              <label for="tournoiOption">
                Option tournois:
                <em>(cocher si oui)</em>
              </label>
              <div>
                <input type="checkbox" name="tournoiOption" id="tournoiOption" required />
              </div>
            </div>
            <div class="form__group">
              <p class="responseAPI" id="responseAPI"></p>
            </div>
          </form>
        </div>
      </ModalBox>
    </transition>
  </section>
</template>

<script>
import Card from "@/components/Card";
import AirtableManager from "@/airtableManager.js";
import ModalBox from "@/components/ModalBox";
import axios from "axios";
//import ModalBox1 from "@/components/ModalBox1";

export default {
  name: "Player",
  components: {
    Card,
    //ModalBox,
    ModalBox,
  },
  data() {
    return {
      allJoueurs: [],
      isModalVisible: false,
    };
  },
  mounted() {
    let imgsCard = document.getElementsByClassName("card__block__img");
    imgsCard.forEach((img) => {
      img.style.height = img.clientWidth + "px";
    });
    AirtableManager.liste("joueurs", this.allJoueurs);
  },
  methods: {
    //* Gestion de l'ouverture et fermeture de la boite modale
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    sendNewPlayer() {
      //*Collecte des datas pour envoi
      let nom = document.getElementById("nom").value;
      let prenom = document.getElementById("prenom").value;
      let email = document.getElementById("email").value;
      let tel = document.getElementById("tel").value;
      let tournoiOption = document.getElementById("tournoiOption").checked;
      //TODO: Vérification des datas à faire
      let NewPlayer = {
        'nom': nom,
        'prenom': prenom,
        'email': email,
        'tel':tel,
        'tournoiOption':tournoiOption,
      };

      //Controle de l'objet envoyé
      console.log(NewPlayer);

      //*Envoie des datas à l'API
      axios
        .post("http://localhost:3000/api/player/add", NewPlayer)
        .then((response) => {
          console.log(response)
          }
        )
        .catch((err) => {
          console.log("error", err);
        });
      //Réception de la réponse de l'API
      document.getElementById("responseAPI").textContent = "reponse API";

      //attente de 2 seconde et fermeture boite modale
      //!Ne pas fermer la boite modale si erreur de saisie ou de l'API
      setTimeout(() => {
        this.closeModal();
      }, 2000);
    },
  },
  //Fonction de lecture d'un fichier
  /*function charger(e){
 
	var fichier = e.target.files;
 
	var dv=document.createElement('textarea');
 
	var charge=new FileReader();
 
	charge.readAsText(fichier[0]);
 
	charge.onloadend = function(e){
		dv.textContent = e.target.result;
		document.body.appendChild(dv);
	}}*/
};
</script>

<style lang='scss'>
.section {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__btnAdd {
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
}
.players {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  justify-content: space-evenly;
  &__card {
    width: 23%;
    background: $BG-card;
    margin: 0.5rem 0.2rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>