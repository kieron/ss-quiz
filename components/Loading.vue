<template>
  <div class="flex justify-center items-center h-full">
    <img class="h-16 w-16" :src="require('~/assets/puff.svg')" alt="Loading" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loading",
});
</script>
