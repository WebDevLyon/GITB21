<template>
  <div>
    <App v-if="user" :associate="user.associate" />
    <LoginForm v-else :errorMessage="errorMessage" @submit="login" />
  </div>
</template>

<script>
import { login } from "../authentication";
import App from "./App";
import LoginForm from "./LoginForm";

export default {
  data() {
    return {
      user: null,
      errorMessage: ""
    };
  },

  methods: {
    login({ username, password }) {
      this.user = login(username, password);
      this.errorMessage = "Authentication failed, please try again";
    }
  },

  components: { App, LoginForm }
};
</script>