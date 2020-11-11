<template>
  <div id="app" class="page-content">
    <Nav :associate="associate" />
    <div class="view">
      <SearchBar />
      <router-view class="view__session" />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import SearchBar from "@/components/SearchBar";
import { mapState } from "vuex";

export default {
  name: "App",
  props: {
    associate: {
      type: String,
      default: null,
    },
  },
  components: {
    Nav,
    SearchBar,
    ...mapState(["userData", "day"]),
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
