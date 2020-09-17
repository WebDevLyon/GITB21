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
      <ModalBox v-show="isModalVisible" @close="closeModal">
        <div slot="header">
<h4>Ajout d'un joueur à la base de données</h4>
        </div>
      </ModalBox>
    </transition>
  </section>
</template>

<script>
import Card from "@/components/Card";
import AirtableManager from "@/airtableManager.js";
import ModalBox from "@/components/ModalBox";
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
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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