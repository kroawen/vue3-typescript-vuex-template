import { Module } from "vuex";
import { state, RequestState } from "./state";
import { mutations, RequestMutations } from "./mutations";
import { getters, RequestGetters } from "./getters";
import { actions, RequestActions } from "./actions";
import { RootState } from "@/store";
import { GenerateStoreType } from "@/store/util";
export * from "./state";
export type RequestStore = GenerateStoreType<
  Pick<RootState, "REQUEST">,
  RequestMutations,
  RequestGetters,
  RequestActions
>;
export const RequestModule: Module<RequestState, RootState> = {
  state,
  mutations,
  actions,
  getters
};
