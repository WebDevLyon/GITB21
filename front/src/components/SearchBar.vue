<template>
  <div class="searchBar">
    <div
      class="searchBar__input-block"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, repudiandae?</div>
    <div>
      <i>LINK DISCONNECT</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style lang='scss'>
.searchBar {
  display: flex;
  justify-content: space-between;
  background: $BG-searchbar;
  padding: 1rem 1rem;
  min-height: 1rem;
}
</style>