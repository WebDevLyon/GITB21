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
        </div>
        <p class="nav__link__title">Dashboard</p>
      </router-link>
    </div>
    <div class="nav__link">
      <router-link to="/player">
        <div>
          <i class="nav__link__icon"></i>
        </div>
        <p class="nav__link__title">Joueurs</p>
      </router-link>
    </div>
    <div class="nav__link">
      <router-link to='/tournois'>
      <div>
        <i class="nav__link__icon"></i>
      </div>
      <p class="nav__link__title">LINK-TITLE</p>
      </router-link>
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