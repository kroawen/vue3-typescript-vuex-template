import { MutationTree } from "vuex";
import { AppState } from "./state";

export enum AppMutationTypes {
  SetName = "SET_NAME",
}

export type AppMutations = {
  [AppMutationTypes.SetName](state: AppState, value: string): void;
};

export const mutations: MutationTree<AppState> & AppMutations = {
  [AppMutationTypes.SetName](state, payload: string) {
    state.appInfo.name = payload;
  }
};
