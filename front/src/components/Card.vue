<template>
  <div class="card">
    <div class="card__dBlock">
      <img class="card__block__img" src="@/assets/img/29348.jpg" alt="PHOTO JOUEUR" />
    </div>
    <p class="card__name">{{joueur.fields.Nom}} {{joueur.fields.Prenom}}</p>
    <div class="card__compteur">
      <div v-if="joueur.fields.Tournois!=undefined">
        {{joueur.fields.Tournois.length}} tournoi
        <span v-if="joueur.fields.Tournois.length>1">s</span>
      </div>
      <div v-else>Aucune d'inscription à un tournoi</div>
    </div>
    <div class="card__bottom">
      <div class="card__bottom__icon icon-mail">
        <a :href="'mailto:'+joueur.fields.Mail">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-envelope"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
            />
          </svg>
        </a>
      </div>
      <div class="card__bottom__icon icon-tel">
        <a :href="'tel:'+joueur.fields.Telephone">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-telephone"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
            />
          </svg>
        </a>
      </div>
      <div class="card__bottom__icon icon-fiche">
        <router-link :to="'/id?id='+joueur.id">
          <span @click="$store.state.IdViewType='Joueurs'">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Card",
  props: {
    joueur: {
      type: Object,
    },
  },
  computed: {
    ...mapState(["IdViewType"]),
  },
};
</script>

<style lang="scss">
.card {
  &__block {
    &__img {
      display: block;
      width: 50%;
      margin: 1rem auto;
      border-radius: 50%;
    }
  }
  &__name {
    text-align: center;
    color: $Color-name;
  }
  &__compteur {
    text-align: center;
  }
  &__bottom {
    display: flex;
    justify-content: space-around;
    margin: 1rem;
    &__icon {
      background-color: $BG-card-icon;
      padding: 0.4rem;
      border-radius: 50%;
      & svg {
        color: black;
        font-size: 1.2rem;
      }
    }
  }
}
</style>