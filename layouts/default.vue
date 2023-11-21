<template>
  <div
    class="bg-indigo-950 w-full h-screen flex items-center justify-center p-5"
  >
    <div
      class="overflow-hidden slide-in-top border-4 border-indigo-900 shadow-lg md:w-1/2 md:h-1/2 w-full h-full text-white p-3 md:p-12 flex flex-col rounded"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DefaultLayout",
});
</script>

<style scoped>
.slide-in-top {
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
