<template>
  <div class="modalBox">
    <div class="modalBox__content">
      <header class="modalBox__content__header">
        <slot name="header">
          <h4>Titre de la boite Modale</h4>
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
        >
          x
        </button>
      </header>
      <section class="modalBox__content__body">
        <slot name="body">
          <p>
            Corps de la boite modale non renseigné... Veuillez contacter le
            développeur
          </p>
        </slot>
      </section>
      <footer class="modalBox__content__footer">
        <slot name="btn-cancel">
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            Annuler
          </button></slot
        >
        <slot name="btn-valid">
          <button type="button" class="btn-valid" @click="valid">
            Valider
          </button></slot
        >
        <slot name="btn-suplementaire"></slot>
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
    valid() {
      this.$emit("valid");
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
    &__body {
      flex-grow: 1;
    }
    &__footer {
      text-align: end;
      & button {
        margin: 0.5rem 1rem;
      }
    }
  }
  //*Si la boite modale contient un formulaire
  .form {
    padding: 1rem;
    &__group {
      display: flex;
      justify-content: space-around;
      margin: 1rem 0;
      & * {
        flex: 1;
      }
    }
  }
}
</style>