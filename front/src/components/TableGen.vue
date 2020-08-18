<template>
  <table>
    <thead>
      <tr>
        <th v-for="(colonne, index) in enteteArray" :key="index" class="taille">{{colonne}}</th>
        <th>Voir fiche</th>
      </tr>
    </thead>
    <tbody v-if="condition">
      <tr v-for="(tournoi, index) in allTournois" :key="index">
        <td>{{tournoi.fields.Date_debut}}</td>
        <td>{{tournoi.fields.Nom}}</td>
        <td>
          <div class="website-status" v-if="tournoi.fields.A_saisir=='Fait'">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-dot dot-signal"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="green"
            >
              <path fill-rule="evenodd" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            <span>Mise en ligne</span>
          </div>
          <div class="website-status" v-if="tournoi.fields.A_saisir=='A Faire'">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-dot dot-signal"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="orange"
            >
              <path fill-rule="evenodd" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            <span>A mettre en ligne</span>
          </div>
          <div v-else class="website-status">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-dot dot-signal"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              color="red"
            >
              <path fill-rule="evenodd" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            <span>Pas de mise en ligne</span>
          </div>
        </td>
        <td>{{tournoi.fields.Envoi_1}}</td>
        <td>{{tournoi.fields.Envoi_2}}</td>
        <td>{{tournoi.fields.Envoi_3}}</td>
        <td>
          <span v-if="tournoi.fields.Simples">Simples</span>
          <span v-if="tournoi.fields.Doubles">Doubles</span>
          <span v-if="tournoi.fields.Mixtes">Mixtes</span>
        </td>
        <td>{{tournoi.fields.Series}}</td>
        <td>LINK</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AirtableManager from "@/airtableManager.js";

export default {
  name: "TableGen",
  data() {
    return {
      allTournois: [],
      enteteArray: [
        "Date",
        "Nom",
        "Online ?",
        "Envoi 1",
        "Envoi 2",
        "Envoi 3",
        "Tableaux",
        "Serie",
      ],
      condition: true,
    };
  },
  mounted() {
    let imgsCard = document.getElementsByClassName("card__block__img");
    imgsCard.forEach((img) => {
      img.style.height = img.clientWidth + "px";
    });
    AirtableManager.liste("Tournois", this.allTournois);
  },
};
</script>

<style>
th,
td {
  overflow-wrap: normal;
  max-width: 80px;
}
</style>