<template>
  <form @submit.prevent="submit()">
    <p v-if="errorMessage" class="error">{{errorMessage}}</p>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button type="submit">Log in</button>
  </form>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },

  methods: {
    submit() {
      this.$emit("submit", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: tomato;
}
</style>