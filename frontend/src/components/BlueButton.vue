<template>
  <div>
    <button id="BlueButton">{{ ButtonText }}</button>
  </div>
</template>

<script>
export default {
  name: "BlueButton",
  props: {
    ButtonText: String,
  },
};
</script>

<style scoped>
#BlueButton {
  cursor: pointer;
  font-size: 1.2em;
  border: solid #0096e7;
  border-radius: 50px;
  color: white;
  background-color: #0096e7;
  width: 150px;
  height: 50px;
}
</style>
