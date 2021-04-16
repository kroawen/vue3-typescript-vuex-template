import { Module } from "vuex";
import { state, UserState } from "./state";
import { mutations, UserMutations } from "./mutations";
import { getters, UserGetters } from "./getters";
import { actions, UserActions } from "./actions";
import { RootState } from "@/store";
import { GenerateStoreType } from "@/store/util";
export * from "./state";

export type UserStore = GenerateStoreType<
  Pick<RootState, "USER">,
  UserMutations,
  UserGetters,
  UserActions
>;
export const UserModule: Module<UserState, RootState> = {
  state,
  mutations,
  actions,
  getters
};
