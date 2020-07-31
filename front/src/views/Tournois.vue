<template>
  <div>
    <h2>Tournois</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Nom</th>
          <th>Online ?</th>
          <th>Envoi 1</th>
          <th>Envoi 2</th>
          <th>Envoi 3</th>
          <th>Tableau</th>
          <th>Serie</th>
          <th>Voir fiche</th>
        </tr>
      </thead>
      <tbody v-if="condition">
        <tr>
          <td>JJ/MM/AAAA</td>
          <td>NOM</td>
          <td>
            <div class="website-status">Mise en ligne</div>
          </td>
          <td>JJ//MM//AAAA</td>
          <td>JJ//MM//AAAA</td>
          <td>JJ//MM//AAAA</td>
          <td>Simples/Doubles/Mixte</td>
          <td>N1 à P12</td>
          <td>link</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tournois",
  data() {
    return {
      condition: true,
    };
  },
};
</script>

<style lang='scss'>
table {
  & .website-status {
    width: 60%;
    margin: auto;
    padding: 0.5rem;
    border: 0.5px solid $BG-headerArray;
    border-radius: 40%;
  }
}
</style>