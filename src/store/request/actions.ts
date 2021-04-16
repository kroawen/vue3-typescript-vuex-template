import { ActionTree } from "vuex";
import { RequestMutations, RequestMutationTypes } from "./mutations";
import { RequestState, state } from "./state";
import { RootState } from "@/store";
import { GenerateActionAugments } from "@/store/util";
import { nanoid } from 'nanoid';

type ActionAugments = GenerateActionAugments<RequestState, RequestMutations>;

export enum RequestActionTypes {
  StartRequest = "START_REQUEST",
  EndRequest = "END_REQUEST"
}

export type RequestActions = {
  [RequestActionTypes.StartRequest](
    { commit }: ActionAugments,
    payload: any
  ): Promise<string>;
  [RequestActionTypes.EndRequest]({ commit }: ActionAugments, payload?: any): void;
};

export const actions: ActionTree<RequestState, RootState> & RequestActions = {
  [RequestActionTypes.StartRequest]({ commit }) {
    return new Promise((resolve) => {
      const id = nanoid();
      setTimeout(() => {
        commit(RequestMutationTypes.StartRequest, [...state.queue, id]);
        resolve(id);
      })
    })
  },

  [RequestActionTypes.EndRequest]({ commit }, id) {
    state.queue = state.queue.filter((queueID: string) => queueID !== id);
    commit(RequestMutationTypes.EndRequest, state.queue);
  }
};
