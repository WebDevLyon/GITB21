<template>
  <nav class="nav">
    <div class="nav__id-user">
      <div>
        <img src="#" alt="Photo de l'utilisateur" />
      </div>
      <p>{{nom}} {{prenom}}</p>
    </div>
    <div class="nav__link">
      <router-link to="/">
        <div>
          <i class="nav__link__icon fas fa-tachometer-alt"></i>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-clipboard-data"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
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
            />
          </svg>
        </div>
        <p class="nav__link__title">Dashboard</p>
      </router-link>
    </div>
    <div class="nav__link">
      <router-link to="player">
        <div>
          <i class="nav__link__icon"></i>
        </div>
        <p class="nav__link__title">Joueurs</p>
      </router-link>
    </div>
    <div class="nav__link">
      <div>
        <i class="nav__link__icon"></i>
      </div>
      <p class="nav__link__title">LINK-TITLE</p>
    </div>
    <div class="nav__link">
      <router-link to="/contact">
        <div>
          <i class="nav__link__icon"></i>
        </div>
        <p class="nav__link__title">LINK-TITLE</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.nav {
  background: $BG-nav;
  height: 100vh;
  color: white;
  &__id-user {
  }
  &__link {
    &__title {
    }
    &__icon {
    }
  }
}
</style>