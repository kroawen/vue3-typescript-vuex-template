import { ActionTree } from "vuex";
import { AppMutations, AppMutationTypes } from "./mutations";
import { AppState } from "./state";
import { RootState } from "@/store";
import { GenerateActionAugments } from "@/store/util";

type ActionAugments = GenerateActionAugments<AppState, AppMutations>;

export enum AppActionTypes {
  SetAppName = "SETNAME"
}

export type AppActions = {
  [AppActionTypes.SetAppName]({ commit }: ActionAugments, payload: string): void;
};

export const actions: ActionTree<AppState, RootState> & AppActions = {
  async [AppActionTypes.SetAppName]({ commit }, payload: string) {
    commit(AppMutationTypes.SetName, payload);
  }
};
