<template>
  <div class="modalBox">
    <div class="modalBox__content">
      <header class="modalBox__content__header" id="idTest">
        <slot name="header">
          <h4>Titre de la boite Modale</h4>
        </slot>
        <button type="button" class="btn-close" @click="close" aria-label="Close modal">x</button>
      </header>
      <section class="modalBox__content__body">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, nesciunt.</p>
      </section>
      <footer class="modalBox__content__footer">
        Pied de page de la modal
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
        >Annuler</button>
        <button type="button" class="btn-valid" @click="close">Valider</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBox",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang='scss'>
.modalBox {
    position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 20px 1px;
  display: flex;
  &__content {
      background-color: #fff;
    overflow-x: scroll;
    width: 80%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    height: 90%;
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        background-color: $BG-headerArray;
    }
  }
}
.modalBox {
  
  &__content {
    
    &__header {
    }
    &__body {
      flex-grow: 1;
    }
    &__footer {
    }
  }
}
</style>