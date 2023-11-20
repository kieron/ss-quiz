import {
  Module,
  Mutation,
  config,
  VuexModule,
  Action,
} from "vuex-module-decorators";
config.rawError = true;
import Question from "~/types/Question";

@Module({
  name: "QuizModule",
  stateFactory: true,
  namespaced: true,
})
export default class QuizModule extends VuexModule {
  private _difficulty: string | null = null;
  private _questions: Question[] = [];
  private _answers: string[] = [];
  private _error: string | null = null;
  private _loading: boolean = false;

  get difficulty() {
    return this._difficulty;
  }

  get questions() {
    return this._questions;
  }

  get answers() {
    return this._answers;
  }

  get error() {
    return this._error;
  }

  get loading() {
    return this._loading;
  }

  @Mutation
  setDifficulty(payload: string) {
    this._difficulty = payload;
  }

  @Mutation
  setQuestions(payload: Question[]) {
    this._questions = payload;
  }

  @Mutation
  setAnswers(payload: string) {
    this._answers.push(payload);
  }

  @Mutation
  setError(payload: string | null) {
    this._error = payload;
  }

  @Mutation
  setLoading(payload: boolean) {
    this._loading = payload;
  }

  @Action
  async fetchQuestions() {
    if (!this.difficulty) return;

    try {
      this.setLoading(true);

      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&difficulty=${this.difficulty}&type=multiple`
      );
      const data = await response.json();

      if (data.response_code !== 0) {
        throw new Error(
          "There was a problem fetching questions! (Probably rate limited!)"
        );
      } else {
        this.setQuestions(data.results);
      }

      this.setLoading(false);
    } catch (error) {
      this.setError(String(error));
      this.setLoading(false);
    }
  }
}
