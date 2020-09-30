<template>
  <table class="array-list">
    <thead>
      <tr>
        <th>N° Licence</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Mail</th>
        <th>Tel.</th>
        <th>Inscrit cette saison</th>
        <th>Compétiteur</th>
        <th>Voir fiche</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(joueur, index) of joueurs" :key="index">
        <td>{{ joueur.licence }}</td>
        <td>{{ joueur.nom }}</td>
        <td>{{ joueur.prenom }}</td>
        <td v-if="!joueur.mail"></td>
        <td v-else>
          <a :href="'mailto:' + joueur.mail"
            ><svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-envelope-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              /></svg
          ></a>
        </td>
        <td v-if="!joueur.tel"></td>
        <td v-else>
          <a :href="'tel: +33' + joueur.tel">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-telephone-forward-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
              /></svg
          ></a>
        </td>
        <td>
          <!--  <Interrupteur />-->
          <div class="slideThree">
            <input
              class="signThisYear"
              type="checkbox"
              value="None"
              :id="'interrupteur' + index"
              name="check"
            />

            <label :for="'interrupteur' + index"></label>
          </div>
        </td>
        <td>{{ joueur.competiteur }}</td>
        <td>
          <router-link :to="'/id?_id=' + joueur._id">
            <span @click="$store.state.IdViewType = 'Joueurs'">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-box-arrow-in-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.146 11.354a.5.5 0 0 1 0-.708L10.793 8 8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 1 8z"
                />
                <path
                  fill-rule="evenodd"
                  d="M13.5 14.5A1.5 1.5 0 0 0 15 13V3a1.5 1.5 0 0 0-1.5-1.5h-8A1.5 1.5 0 0 0 4 3v1.5a.5.5 0 0 0 1 0V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-8A.5.5 0 0 1 5 13v-1.5a.5.5 0 0 0-1 0V13a1.5 1.5 0 0 0 1.5 1.5h8z"
                />
              </svg>
            </span>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Interrupteur from "@/components/Interrupteur";
export default {
  name: "Card2",
  components: {
    Interrupteur,
  },
  props: {
    joueurs: {
      type: Array,
    },
  },
  methods: {},

  mounted() {
    this.joueurs.forEach((joueur) => {
      if (joueur.inscription) {
        let joueurCheckbox = document.getElementById(
          "interrupteur" + this.joueurs.indexOf(joueur)
        );
        joueurCheckbox.setAttribute("checked", "");
      }
    });
  },
};
</script>

<style lang="scss">
$activeColor: #27ae60; //green
$darkenColor: darken($activeColor, 20%);
/* $background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/13460/dark_wall.png'); */
$background: #3498db;
.slideThree {
  width: 80px;
  height: 26px;
  background: #333;
  margin: 20px auto;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 0.2);
  &:after {
    content: "Non";
    color: red;
    position: absolute;
    right: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
    //text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);
  }
  &:before {
    content: "Oui";
    color: $activeColor;
    position: absolute;
    left: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
  }
  label {
    display: block;
    width: 34px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: 1;
    background: #fcfff4;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    border-radius: 50px;
    transition: all 0.4s ease;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label {
      left: 43px;
    }
  }
}
</style>