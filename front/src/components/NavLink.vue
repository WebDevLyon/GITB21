<template>
  <div class="nav__link">
    <router-link class="router-link" :to="navLink">
      <div class="nav__link__title">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          :class="svgClass"
          class="nav__link__title--icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <slot name="svgPath"></slot>
        </svg>
        <p class="nav__link__title--text">{{ navTitle }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    navTitle: { type: String, default: null },
    navLink: { type: String, default: "/" },
    svgClass: { type: String, default: "" },
  },
};
</script>

<style>
</style>