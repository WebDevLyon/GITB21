<template>
  <div class="input-block">
    <div class="input-block__icon">
      <slot></slot>
    </div>
    <div class="input-block__input">
      <label :for="forId">{{ label }}</label>
      <input :id="id" :type="type" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forId: { required: true },
    id: { required: true },
    label: { type: String, required: true },
    placeholder: { type: String },
    type: { type: String, default: "text" },
  },
};
</script>

<style lang='scss' scoped>
.input-block {
  margin: 0.5rem;
  width: 45%;
  background-color: #fff;
  border: 0.5px black solid;
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  &__icon {
    padding: 1rem;
    font-size: 1.5rem;
    border-right: 0.5px dashed;
  }
  &__input {
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    & label {
      border-bottom: 0.5px dashed;
      height: 33%;
      padding: 0.3rem 1rem;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 1.2rem;
    }
    & input {
      padding: 0 1rem;
      flex-grow: 1;
      border: none;
    }
  }
}
</style>