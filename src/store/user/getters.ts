import { GetterTree } from "vuex";
import { UserState } from "./state";
import { RootState } from "@/store";

export type UserGetters = {};

export const getters: GetterTree<UserState, RootState> & UserGetters = {};
