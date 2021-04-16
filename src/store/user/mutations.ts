import { MutationTree } from "vuex";
import { UserState } from "./state";

export enum UserMutationTypes {
  SetToken = "SET_TOKEN"
}

export type UserMutations = {
  [UserMutationTypes.SetToken](state: UserState, token: string): void;
};

export const mutations: MutationTree<UserState> & UserMutations = {
  [UserMutationTypes.SetToken](state, token: string) {
    state.accessToken = token;
  }
};
