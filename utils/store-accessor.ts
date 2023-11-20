import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import QuizModule from "~/store/QuizModule";

export let quizModule: QuizModule;

export function initialiseStores(store: Store<any>): void {
  quizModule = getModule(QuizModule, store);
}
