<template>
  <div>
    <App v-if="authCkeck" />
    <LoginForm v-else />
  </div>
</template>

<script>
import axios from "axios";
import App from "./App";
import LoginForm from "./LoginForm";
import { mapState } from "vuex";

export default {
  data() {
    return {
      authCkeck: false,
    };
  },
  computed: {
    ...mapState(["IdViewType", "userData"]),
  },

  methods: {},
  mounted() {
    //initialisation des informations de l'user
    if (window.localStorage.getItem("userData")) {
      this.$store.state.userData = {
        name: JSON.parse(window.localStorage.getItem("userData")).name,
        email: JSON.parse(window.localStorage.getItem("userData")).email,
        userId: JSON.parse(window.localStorage.getItem("userData")).userId,
        association: JSON.parse(window.localStorage.getItem("userData"))
          .association,
        level: JSON.parse(window.localStorage.getItem("userData")).level,
      };
    } else if (window.sessionStorage.getItem("userData")) {
      this.$store.state.userData = {
        name: JSON.parse(window.sessionStorage.getItem("userData")).name,
        email: JSON.parse(window.sessionStorage.getItem("userData")).email,
        userId: JSON.parse(window.sessionStorage.getItem("userData")).userId,
        association: JSON.parse(window.sessionStorage.getItem("userData"))
          .association,
        level: JSON.parse(window.sessionStorage.getItem("userData")).level,
      };
    } else {
      console.log("pas d'info");
    }
    if (
      this.userData.association ||
      this.userData.userId ||
      this.userData.level
    ) {
      axios
        .post("http://localhost:3000/api/user/auth", this.userData, {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(window.localStorage.getItem("userData")).token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.userData.userId = response.data._id;
          this.userData.name = response.data.name;
          this.userData.email = response.data.email;
          this.userData.level = response.data.level;
          this.userData.association = response.data.association;
          return (this.authCkeck = true);
        })
        .catch((err) => {
          console.log(err);
          return (this.authCkeck = false);
        });

      //! s'il n'existe pas return false
      // S'il existe appel api pour vérification
      //! si erreur retourner false
      //* sinon lancer app.vue avec true
    } else {
      this.authCkeck = false;
    }
  },
  components: {
    App,
    LoginForm,
  },
};
</script>