<template>
  <div class="flex flex-col h-full justify-between">
    <div class="flex flex-col gap-5">
      <h1 class="font-medium text-3xl">A quiz!</h1>
      <span>
        You will have 10 seconds to answer each question, or a random answer
        will be chosen for you! There are 10 questions in total.
      </span>
    </div>

    <div class="flex flex-col gap-5 p-5">
      <h2>Select difficulty to begin!</h2>
      <Button
        v-for="button in difficultyButtons"
        :key="button.key"
        :label="button.label"
        @click="setDifficulty(button.key)"
      />
    </div>

    <div class="text-white text-xs text-indigo-500">
      <p>✌️ You are playing the internet's number 1 quiz, by Kieron Boswell.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { quizModule } from "~/utils/store-accessor";
import Button from "~/components/Button.vue";

interface DifficultyButton {
  label: string;
  key: string;
}

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
      difficultyButtons: [
        { label: "Easy", key: "easy" },
        { label: "Medium", key: "medium" },
        { label: "Hard", key: "hard" },
      ] as DifficultyButton[],
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
