<template>
  <div class="flex flex-col h-full justify-between">
    <h1 class="font-medium text-3xl">
      Let's begin the quiz!
      <span v-if="difficulty" class="text-sm">({{ difficulty }})</span>
    </h1>

    <Loading v-if="loading" />

    <template v-else-if="!error">
      <Question
        v-for="(q, index) in questions"
        :key="index"
        :question="q"
        :currentQuestion="currentQuestion"
        :index="index"
        :error="error"
        v-if="currentQuestion === index"
        @answer="setAnswer"
      />
    </template>

    <template v-else>
      <div class="flex flex-col gap-5 p-5 slide-in-right">
        <h2 class="text-md text-red-300">{{ error }}</h2>
        <Button label="Try again?" @click="reloadRouteFully" class="mt-auto" />
      </div>
    </template>

    <div class="text-white text-xs text-indigo-500">
      <p>❓ Choose carefully!</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { quizModule } from "~/utils/store-accessor";
import Button from "~/components/Button.vue";
import Loading from "~/components/Loading.vue";
import QuestionType from "~/types/Question";
import Question from "~/components/Question.vue";

export default Vue.extend({
  name: "QuizPage",
  components: { Button, Loading, Question },
  head() {
    return {
      title: "Quiz",
    };
  },
  data() {
    return {
      currentQuestion: 0,
    };
  },
  computed: {
    difficulty(): string | null {
      return quizModule.difficulty;
    },
    questions(): QuestionType[] {
      return quizModule.questions;
    },
    loading(): boolean {
      return quizModule.loading;
    },
    error(): string | null {
      return quizModule.error;
    },
  },
  async mounted() {
    if (!this.difficulty) this.$router.push("/");
    if (!this.error) {
      await this.getQuestions();
    }
  },
  methods: {
    async getQuestions() {
      await quizModule.fetchQuestions();
    },
    setAnswer(answer: string) {
      quizModule.setAnswers(answer);
      this.currentQuestion++;

      if (this.currentQuestion === this.questions.length) {
        this.$router.push("/results");
      }
    },
    reloadRouteFully() {
      window.location.reload();
    },
  },
});
</script>

<style scoped>
.slide-in-right {
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-right {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
