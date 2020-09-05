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
    if (
      window.localStorage.getItem("userData")
    ) {
      console.log("info ok");
      this.userData = {
        userId: JSON.parse(window.localStorage.getItem("userData")).userId,
        token: JSON.parse(window.localStorage.getItem("userData")).token,
        associate: JSON.parse(window.localStorage.getItem("userData"))
          .associate,
        level: JSON.parse(window.localStorage.getItem("userData")).level,
      };
    } else {
      console.log("pas d'info");
    }
    console.log('lancement request')
    //const userToken =
    //  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjUyYjgwZGIzYzI3OTI2NThkMDY2ZDUiLCJpYXQiOjE1OTkzMDM2ODksImV4cCI6MTU5OTM5MDA4OX0.WC4dujuMpGNS_9tirTiFDKWEN7ero9KfYmkQ02p_4EQ";
    //const userId = { userId: "5f52b80db3c2792658d066d5" };
    if (
      this.userData.associate ||
      this.userData.token ||
      this.userData.userId ||
      this.userData.level
    ) {
      axios
        .post("http://localhost:3000/api/auth/auth", this.userData, {
          headers: { Authorization: "Bearer " + this.userData.token },
        })
        .then((response) => {
          console.log(response.data);
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
      this.authCkeck = true;
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