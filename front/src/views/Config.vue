<template>
  <div class="container">
    <section class="config-section">
      <h2 class="config-section__title">Informations personnelles</h2>
      <div class="config-section__wrapper">
        <form class="config-section__wrapper__form">
          <InputConfigPage
            forId="inputName"
            id="inputName"
            label="nom"
            :placeholder="userData.name"
            ><svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-person-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </InputConfigPage>
          <InputConfigPage
            label="email"
            :placeholder="userData.email"
            forId="inputEmail"
            id="inputEmail"
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
              />
            </svg>
          </InputConfigPage>
          <InputConfigPage
            label="password"
            type="password"
            placeholder="*************"
            forId="inputPassword"
            id="inputPassword"
            ><svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-key-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </InputConfigPage>
          <InputConfigPage
            label="Vérifier le password"
            placeholder="*************"
            forId="inputCheckPassword"
            id="inputCheckPassword"
            ><svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-check"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
              />
            </svg>
          </InputConfigPage>
        </form>
        <div class="config-section__wrapper__btn">
          <button>Supprimer mon compte</button>
          <button>Valider les changements</button>
        </div>
      </div>
    </section>
    <section><h2>Information sur l'association</h2></section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputConfigPage from "@/components/Input-configPage";

export default {
  data() {
    return {
      test: 123,
    };
  },
  computed: {
    ...mapState(["userData"]),
  },
  components: {
    InputConfigPage,
  },
};
</script>

<style lang='scss'>
.config-section {
  &__wrapper {
    background-color: #f7fbff;
    padding: 1rem 0;
    border: 0.5px black solid;
    &__form {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    &__btn {
      text-align: center;
      & button {
        margin: 1rem;
      }
    }
  }
}
.text-to {
}
</style>