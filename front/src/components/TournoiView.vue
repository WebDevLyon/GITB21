<template>
  <div class="panel">
    <div class="panel__infos">
      <div class="panel__infos__header">
        <h3>Informations du tournoi</h3>
      </div>
      <div class="panel__infos__content">
        <p>
          Tournoi ouvert aux niveaux
          <strong>{{data.Series}}</strong>
          <br />Sur les tableaux :
          <strong>'mixte et/ou simples et double'</strong>
        </p>
      </div>
      <div class="panel__infos__content">
        <p>
          Date début :
          <strong>{{data.Date_debut}}</strong>
          <br />Date fin :
          <strong>{{data.Date_Fin}}</strong>
        </p>
        <p>
          <span v-if="data.Simples">Les simples seront joués le {{data.Date_Simples[0]}}</span>
          <span v-if="data.Doubles">
            <br />
            Les doubles seront joués {{data.Date_Doubles[0]}}
          </span>
          <span v-if="data.Mixtes">
            <br />
            Les mixtes seront joués {{data.Date_Mixtes[0]}}
          </span>
        </p>
      </div>
    </div>
    <div class="panel__infos">
      <div class="panel__infos__header">
        <h3>Localisation</h3>
      </div>
      <div class="panel__infos__content">
        <p>
          <span v-for="(ligne, index) in data.Adresse.split(',')" :key="index">
            {{ligne}}
            <br />
          </span>
        </p>
      </div>
    </div>
    <div class="panel__infos">
      <div class="panel__infos__header">
        <h3>Correspondant</h3>
      </div>
      <div class="panel__infos__content">
        <p>En cours de développement</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TournoiView",
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.panel__infos {
  border: black 1px solid;
  margin: 1rem 0;

  &__header {
    background-color: $BG-headerArray;
    & h3 {
      margin: 0;
      padding: 1rem;
    }
  }
  &__content {
    padding: 0 1rem;
  }
}
</style>