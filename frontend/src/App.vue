<template>
  <div>
    <MusmaNav />
    <router-view></router-view>
  </div>
</template>

<script>
import MusmaNav from "@/components/MusmaNav.vue";

export default { components: { MusmaNav } };
</script>

<style>
body {
  font-family: "Malgun Gothic" !important;
}
</style>
