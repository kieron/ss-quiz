<template>
  <div class="flex flex-col h-full justify-between">
    <div class="flex flex-col gap-5">
      <h1 class="font-medium text-3xl">A quiz!</h1>
      <span
        >You will have 10 seconds to answer each question, or a random answer
        will be chosen for you!</span
      >
    </div>

    <div class="flex flex-col gap-5 p-5">
      <h2>Select difficulty to begin!</h2>
      <Button
        v-for="button in buttons"
        :key="button.key"
        :label="button.label"
        @click="setDifficulty(button.key)"
      />
    </div>

    <div class="text-white text-xs text-indigo-500">
      <p>✌️ You are playing the internets number 1 quiz, by Kieron Boswell.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { quizModule } from "~/utils/store-accessor";
import Button from "~/components/Button.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { Button },
  head() {
    return {
      title: "Quiz - Choose Difficulty",
    };
  },
  data() {
    return {
      buttons: [
        {
          label: "Easy",
          key: "easy",
        },
        {
          label: "Medium",
          key: "medium",
        },
        {
          label: "Hard",
          key: "hard",
        },
      ],
    };
  },
  methods: {
    setDifficulty(key: string) {
      quizModule.setDifficulty(key);
      this.$router.push("/quiz");
    },
  },
});
</script>
