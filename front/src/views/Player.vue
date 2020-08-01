<template>
  <section class="players">
    <Card class="players__card" v-for="card of cards" :key="card" />
  </section>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Player",
  components: {
    Card,
  },
  data() {
    return {
      cards: [1, 2, 3, 4, 5],
    };
  },
  mounted() {
    let imgsCard = document.getElementsByClassName("card__block__img");
    console.log(imgsCard);
    imgsCard.forEach((img) => {
      img.style.height = img.clientWidth + "px";
    });
  },
};
</script>

<style lang='scss'>
.players {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  justify-content: space-evenly;
  &__card {
    width: 23%;
    background: $BG-card;
    margin: 0.5rem 0.2rem;
  }
}
</style>