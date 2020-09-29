<template>
  <div class="home">
    <div v-if="$store.state.userData.association == null">
      <NotAssociation />
    </div>
    <div v-else>
      <div id="block-content" class="home">
        <div id="dashboard" class="row justify-content-around">
          <div id="panel-tounois" class="card col-12 col-sm-5 my-2 pb-1">
            <h2>Suivi tournois</h2>
            <div>
              <p>
                Nombre de tournois suivi: <span id="nbTournoisSuivis"></span>
              </p>
              <p>
                Nouveaux tournois enregistrés:
                <span id="nbTournoisNotSuivis"></span>
              </p>
              <p>Prochain(s) tournoi(s): <span id="nextTournois"></span></p>
            </div>
            <button class="button w-50 mx-auto">Entrer nouveau tournoi</button>
          </div>
          <div id="panel-joueurs" class="card col-sm-5 col-12 my-2">
            <h2>Suivi joueurs</h2>
            <p>
              Nombre de joueurs compétiteurs: <span id="nbJoueursCompet"></span>
            </p>
            <p>
              Nouveaux tournois enregistrés:
              <span id="nbTournoisNotSuivis"></span>
            </p>
            <div class="d-flex justify-content-between">
              <p>
                Alerte joueurs à 10 tournois:
                <span id="alert10Tournois">0</span>
              </p>
              <a href="#" class="">Voir liste</a>
            </div>
            <button class="button w-50 mx-auto btn-primary">
              Entrer nouveau joueur
            </button>
          </div>
        </div>
        <div class="row">
          <div id="panel-envois" class="card col-sm-12 my-2">
            <h2>Suivi envois</h2>
            <p>Prochains envois</p>
            <div class="table-responsive-sm">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Tournoi</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Adresse</th>
                  </tr>
                </thead>
                <tbody v-if="envoiAFaire">
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="4" class="text-center">
                      Pas d'envoi programmé
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  </div>
</template>

<script>
import NotAssociation from "@/components/NotAssociation";


export default {
  name: "Home",
  components: {
    NotAssociation,
  },
  mounted() {
   
  },
};
</script>
