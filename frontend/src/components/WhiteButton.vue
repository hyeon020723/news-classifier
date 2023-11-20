<template>
  <div>
    <div class="ButtonArea">
      <button id="WhiteButton">{{ ButtonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhiteButton",
  props: {
    ButtonText: String,
  },
};
</script>

<style scoped>
#WhiteButton {
  cursor: pointer;
  font-size: 0.8em;
  border: 1px solid #5f5f5f;
  border-radius: 50px;
  color: #5f5f5f;
  background-color: #ffffff;
  width: 150px;
  height: 50px;
}
</style>
