<template>
  <div>
    <App v-if="authCkeck" />
    <!-- <App v-if="true" />FORCE LOGIN-->
    <LoginForm v-else />-
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
    ...mapState(["userData"]),
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
    } else {
      console.log("pas d'info");
    }
    //Si des données sont présentes dans un Storage, on verrifie le token et actualisons les données
    if (
      this.userData.association ||
      this.userData.userId ||
      this.userData.level
    ) {
      axios
        .post("http://localhost:3000/api/user/autoLog", this.userData, {
          headers: {
            Authorization:
              "Bearer " +
              JSON.parse(window.localStorage.getItem("userData")).token,
          },
        })
        .then((response) => {
          this.userData.userId = response.data._id;
          this.userData.name = response.data.name;
          this.userData.email = response.data.email;
          this.userData.role = response.data.role;
          this.userData.association = response.data.association;
          return (this.authCkeck = true);
        })
        .catch((err) => {
          console.log("err", err);
          return (this.authCkeck = false);
        });
      //Sinon ne pas authentifier
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