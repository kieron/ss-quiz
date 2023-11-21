<template>
  <div v-if="isCurrentQuestion" class="flex flex-col gap-5 p-5 slide-in-right">
    <h2 class="text-lg" v-html="question.question" />
    <Button
      v-for="button in allAnswersForQuestion"
      :key="button"
      :label="button"
      @click="setAnswer(button)"
    />
    <div class="text-xs text-red-500">{{ timer }}s remaining</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "~/components/Button.vue";

export default Vue.extend({
  name: "QuizPage",
  components: { Button },
  data() {
    return {
      timer: 10,
    };
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    currentQuestion: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    error: {
      type: String,
      required: false,
    },
  },
  computed: {
    isCurrentQuestion() {
      return this.currentQuestion === this.index;
    },
    allAnswersForQuestion() {
      return this.question.incorrect_answers.concat(
        this.question.correct_answer
      );
    },
  },
  methods: {
    setAnswer(answer: string) {
      this.$emit("answer", answer);
    },
    startTimer() {
      if (this.error) return;

      this.timer = 10;
      const interval = setInterval(() => {
        this.timer--;
        if (this.timer === 0) {
          clearInterval(interval);
          this.setAnswer("");
        }
      }, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
});
</script>
