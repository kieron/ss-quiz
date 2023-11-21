<template>
  <button
    class="middle none center rounded-lg border-4 border-indigo-900 hover:border-green-500/70 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    :aria-label="label"
    @click="$emit('click')"
  >
    <span v-html="label" />
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",
  props: {
    label: {
      type: String,
      default: null,
    },
  },
});
</script>
