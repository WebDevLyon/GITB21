<template>
  <div class>
    <table class="table table-striped">
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
        <tr v-for="joueur of joueurs" :key="joueur">
          <td>{{ joueur.licence }}</td>
          <td>{{ joueur.nom }}</td>
          <td>{{ joueur.prenom }}</td>
          <td>{{ joueur.mail }}</td>
          <td>{{ joueur.tel }}</td>
          <td>{{ joueur.inscription - saison }}</td>
          <td>{{ joueur.competiteur }}</td>
          <td>Voir fiche</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Card2",
  props: {
    joueurs: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
</style>