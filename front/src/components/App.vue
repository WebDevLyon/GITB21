<template>
  <div id="app" class="page-content">
    <Nav />
    <div class="view">
      <SearchBar />
      <router-view class="view__session" />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";

export default {
  name: "App",
  components: {
    Nav,
    SearchBar,
  },
};
</script>


<style lang="scss">
.view {
  display: flex;
  flex-direction: column;
  &__session {
    background: $BG-content;
    flex: 1;
    padding: 0 2rem;
    overflow: scroll;
  }
}
</style>
