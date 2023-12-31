<template>
  <div class="flex flex-col h-full justify-between">
    <h1 class="font-medium text-3xl">You're all done!</h1>

    <div class="flex flex-col gap-5 p-5 slide-in-right">
      <h2>Let's see how you did.</h2>
      <div class="font-bold text-3xl jello-horizontal">
        You got {{ correctAnswers }} / {{ questions.length }} questions correct!
      </div>
      <div class="text-lg">
        {{ grading }}
      </div>
      <Button label="Try again" @click="$router.push('/')" class="mt-auto" />
    </div>

    <div class="text-white text-xs text-indigo-500">
      <p>😁 Thanks for playing!</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { quizModule } from "~/utils/store-accessor";
import Button from "~/components/Button.vue";
import Question from "~/types/Question";

export default Vue.extend({
  name: "ResultsPage",
  components: { Button },
  head() {
    return {
      title: "Results",
    };
  },
  computed: {
    answers(): string[] {
      return quizModule.answers;
    },
    questions(): Question[] {
      return quizModule.questions;
    },
    correctAnswers(): number {
      if (!this.questions.length) {
        this.$router.push("/");
        return 0;
      }

      const normalizedCorrectAnswers = this.questions.map(
        (q) => q.correct_answer
      );
      const normalizedUserAnswers = this.answers.map((a) => a);

      return this.questions.reduce((count, _, index) => {
        return normalizedCorrectAnswers[index] === normalizedUserAnswers[index]
          ? count + 1
          : count;
      }, 0);
    },
    grading(): string {
      const percentage = (this.correctAnswers / this.questions.length) * 100;
      if (percentage >= 70) return "Wow, great job! 🏆";
      if (percentage >= 60) return "Not bad, but you can do better! 🥈";
      if (percentage >= 50) return "It's a start! 🥉";
      if (percentage >= 40) return "Well, at least you tried! 🤔";
      return "Hmm, maybe try again? 🙄";
    },
  },
});
</script>

<style>
.slide-in-right {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.jello-horizontal {
  -webkit-animation: jello-horizontal 0.9s 0.6s both;
  animation: jello-horizontal 0.9s 0.6s both;
}

@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
