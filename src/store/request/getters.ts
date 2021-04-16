import { GetterTree } from "vuex";
import { RequestState } from "./state";
import { RootState } from "@/store";

export type RequestGetters = {};

export const getters: GetterTree<RequestState, RootState> & RequestGetters = {};
