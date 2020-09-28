<template>
  <div>
    <form>
      <label for="name">nom</label>
      <input id="name" type="text" required value="a@a.fr" />
      <label for="email">email</label>
      <input id="email" type="email" required value="a@a.fr" />
      <label for="password">password</label>
      <input id="password" type="password" required value="a@a.fr" />
      <label for="association">association</label>
      <input
        id="association"
        type="text"
        required
        value="5f6e1f6dead0e26544e5c9cb"
      />
      <input type="submit" @click="test" />
    </form>
    <br />
    <br />
    <br />
    <form>
      <label for="user">Rechercher un nom d'utilisateur</label>
      <input id="user" type="text" value="a@a.fr" />
      <input type="submit" @click="findUser" />
    </form>
    <p>{{ responseServer }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "test",
  data() {
    return {
      userData: {
        name: null,
        email: null,
        password: null,
        association: null,
      },
      responseServer: null,
    };
  },
  methods: {
    test() {
      this.userData.name = document.getElementById("name").value;
      this.userData.password = document.getElementById("password").value;

      this.userData.email = document.getElementById("email").value;
      this.userData.association = document.getElementById("association").value;

      console.log(this.userData);
      axios
        .post("http://localhost:3000/api/user/signup", this.userData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          this.responseServer = err;
        });
    },
    findUser() {
      let userdata = document.getElementById("user").value;
      console.log(userdata);
      axios
        .get("http://localhost:3000/api/user/find", {params:{ name:userdata}})
        .then((response) => {
          this.responseServer = response.data;
        })
        .catch((err) => {
          this.responseServer = err;
        });
    },
  },
};
</script>

<style>
</style>