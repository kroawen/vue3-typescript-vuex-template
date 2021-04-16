import { GetterTree } from "vuex";
import { AppState, state } from "./state";
import { RootState } from "@/store";

export type AppGetters = {};

export const getters: GetterTree<AppState, RootState> & AppGetters = {};
