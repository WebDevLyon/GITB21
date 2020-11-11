<template>
  <nav class="nav">
    <div class="nav__id-user">
      <div>
        <img
          class="nav__id-user--logo"
          src="#"
          alt="Logo de l'association"
          v-if="userData.association.logoURL"
        />
        <img
          class="nav__id-user--logo"
          src="../assets/img/logo.png"
          alt="Logo de l'association"
          v-else
        />
      </div>
      <p class="nav__id-user--name">{{ userData.association.name }}</p>
    </div>
    <NavLink navTitle="Dashboard" navLink="/" svgClass="bi bi-clipboard-data">
      <template v-slot:svgPath>
        <path
          fill-rule="evenodd"
          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
        />
        <path
          fill-rule="evenodd"
          d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
        />
        <path
          d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
        /> </template
    ></NavLink>
    <NavLink
      navTitle="Joueurs"
      navLink="/player"
      svgClass="bi bi-person-circle"
    >
      <template v-slot:svgPath>
        <path
          d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path
          fill-rule="evenodd"
          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
      /></template>
    </NavLink>
    <NavLink navTitle="Tournois" navLink="/tournois" svgClass="bi bi-award">
      <template v-slot:svgPath>
        <path
          fill-rule="evenodd"
          d="M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z"
        />
        <path
          d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"
        />
      </template>
    </NavLink>
    <NavLink
      navTitle="Contact"
      navLink="/contact"
      svgClass="bi bi-journal-album"
    >
      <template v-slot:svgPath>
        <path
          d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1H2a2 2 0 0 1 2-2z" />
        <path
          d="M2 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H2zm3-6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5z" />
        <path
          fill-rule="evenodd"
          d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"
      /></template>
    </NavLink>
    <NavLink navTitle="Configuation" navLink="/config" svgClass="bi bi-wrench">
      <template v-slot:svgPath>
        <path
          fill-rule="evenodd"
          d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"
      /></template>
    </NavLink>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import NavLink from "@/components/NavLink";
/*
 *Component NavLink
 *props: navTitle={type:String}=>Text for link navLink={type:String}=>route svgClass={type:String}=>class attribute for svg
 *slot name='svgPatch' for path of svg
 */

export default {
  name: "Nav",
  components: { NavLink },
  computed: {
    ...mapState(["userData"]),
  },
};
</script>

<style lang="scss">
.nav {
  background: $BG-nav;
  height: 100vh;
  color: white;
  &__id-user {
    &--name {
      text-align: center;
      margin-bottom: 5rem;
    }
  }
}
</style>