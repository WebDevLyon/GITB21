<template>
  <div>
    <div>
    <h2>Informations sur le VueEx</h2>
    <h3>Information stockées sur l'utilisateur</h3>
    <p>{{this.userData}}</p>
<hr>
    </div>
    
  </div>
</template>

<script>
//import axios from "axios";
import { mapState } from "vuex";


export default {
  name: "test",
  data() {
    return {
      responseServer: null,
    };
  },
  computed: {
    ...mapState(["IdViewType", "userData", 'playerClub']),
  },
  methods: {}  
}
</script>

<style>
</style>