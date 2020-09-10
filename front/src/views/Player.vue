<template>
  <section>
    <h2>Joueurs</h2>
    <div class="players">
      <Card
        class="players__card"
        v-for="(joueur,index) of allJoueurs"
        :key="index"
        :joueur="joueur"
      />
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card";
import AirtableManager from "@/airtableManager.js";

export default {
  name: "Player",
  components: {
    Card,
  },
  data() {
    return {
      allJoueurs: [],
    };
  },
  mounted() {
    let imgsCard = document.getElementsByClassName("card__block__img");
    imgsCard.forEach((img) => {
      img.style.height = img.clientWidth + "px";
    });
    AirtableManager.liste("joueurs", this.allJoueurs);
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
</style>