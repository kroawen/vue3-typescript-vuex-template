import { ActionTree } from "vuex";
import { UserMutations, UserMutationTypes } from "./mutations";
import { UserState, state } from "./state";
import { RootState } from "@/store";
import { GenerateActionAugments } from "@/store/util";
import api from "@/api";

type ActionAugments = GenerateActionAugments<UserState, UserMutations>;

export enum UserActionTypes {
  SetToken = "SET_TOKEN"
}

export type UserActions = {
  [UserActionTypes.SetToken]({ commit }: ActionAugments, token: string): void;
};

export const actions: ActionTree<UserState, RootState> & UserActions = {
  async [UserActionTypes.SetToken]({ commit }, token: string) {
    commit(UserMutationTypes.SetToken, token);
  }
};
