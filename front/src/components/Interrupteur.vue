<template>
  <div class="slideThree">
    <input
      class="signThisYear"
      type="checkbox"
      value="None"
      :id="'interrupteur' + index"
      name="check"
    />

    <label :for="'interrupteur' + index"></label>
  </div>
</template>

<script>
export default {
  name: "Interrupteur",
};
</script>

<style lang="scss">
$activeColor: #27ae60; //green
$darkenColor: darken($activeColor, 20%);
/* $background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/13460/dark_wall.png'); */
$background: #3498db;
.slideThree {
  width: 80px;
  height: 26px;
  background: #333;
  margin: 20px auto;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5),
    0px 1px 0px rgba(255, 255, 255, 0.2);
  &:after {
    content: "Non";
    color: red;
    position: absolute;
    right: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
    //text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.15);
  }
  &:before {
    content: "Oui";
    color: $activeColor;
    position: absolute;
    left: 10px;
    z-index: 0;
    font: 12px/26px Arial, sans-serif;
    font-weight: bold;
  }
  label {
    display: block;
    width: 34px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: 1;
    background: #fcfff4;
    background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    border-radius: 50px;
    transition: all 0.4s ease;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
  input[type="checkbox"] {
    visibility: hidden;
    &:checked + label {
      left: 43px;
    }
  }
}
</style>