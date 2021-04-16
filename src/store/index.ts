
import { createStore } from "vuex";

import { AppModule, AppStore, AppState } from "@/store/app";
import { AppActionTypes } from "@/store/app/actions";
import { AppMutationTypes } from "@/store/app/mutations";

import { UserModule, UserState, UserStore } from "./user";
import { UserActionTypes } from "./user/actions";
import { UserMutationTypes } from "./user/mutations";


import { RequestMutationTypes } from './request/mutations';
import { RequestActionTypes } from './request/actions';
import { RequestState, RequestModule, RequestStore } from './request';

export type RootState = {
  APP: AppState;
  USER: UserState;
  REQUEST: RequestState;
};

export const AllActionTypes = {
  APP: AppActionTypes,
  USER: UserActionTypes,
  REQUEST: RequestActionTypes,
};

export const AllMutationTypes = {
  APP: AppMutationTypes,
  USER: UserMutationTypes,
  REQUEST: RequestMutationTypes,
};

export type Store = AppStore & UserStore & RequestStore;

export const store = createStore({
  modules: {
    APP: AppModule,
    USER: UserModule,
    REQUEST: RequestModule,
  }
});

export function useStore(): Store {
  return store as Store;
}

export default store;
