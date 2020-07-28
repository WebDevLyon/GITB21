<template>
  <section class="players">
    <div class="players__card" v-for="card of cards" :key="card">
      {{card}}
      <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in harum voluptatum quaerat aspernatur maiores eveniet dolorem rem a facere architecto fugit repellendus laboriosam, aliquid ad libero saepe corrupti sequi sint earum, nisi quam dolore incidunt? Assumenda vitae, repellendus, expedita tempore numquam eos, dicta provident in optio labore earum dolores suscipit deserunt quibusdam voluptate sint quam! Laudantium modi quibusdam cum dolores numquam quidem, dignissimos amet fugiat facilis magni quod enim impedit, et blanditiis molestias exercitationem eius accusantium quisquam. Commodi rem sunt ipsa iusto aspernatur dicta rerum fugiat laborum molestiae eveniet. Nisi veritatis quisquam, dignissimos officia assumenda recusandae quis consectetur. Dolores?
    </div>
  </section>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      cards: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style lang='scss'>
.players {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  &__card {
    width: 21%;
    background: $BG-card;
    margin: 1rem;
  }
}
</style>