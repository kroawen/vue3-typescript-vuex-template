import { MutationTree } from "vuex";
import { RequestState } from "./state";

export enum RequestMutationTypes {
  StartRequest = "START_REQUEST",
  EndRequest = "END_REQUEST",
}

export type RequestMutations = {
  [RequestMutationTypes.StartRequest](state: RequestState, data: string[]): void;
  [RequestMutationTypes.EndRequest](state: RequestState, data: string[]): void;
};

export const mutations: MutationTree<RequestState> & RequestMutations = {
  [RequestMutationTypes.StartRequest](state, data: string[]) {
    state.queue = data;
  },
  [RequestMutationTypes.EndRequest](state, data: string[]) {
    state.queue = data;
  }
};
