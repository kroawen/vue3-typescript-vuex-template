import { AllActionTypes } from "./store/index";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useStore } from "./store";

const api = axios.create({
  baseURL: "127.0.0.1:3032",
});

interface RequestConfig extends AxiosRequestConfig {
  id: string;
}

interface Response extends AxiosResponse {
  config: RequestConfig;
}

export interface RequestError extends AxiosError {
  response: Response;
}

export const onRequest = async (config: AxiosRequestConfig) => {
  const store = useStore();

  const id = await store.dispatch(AllActionTypes.REQUEST.StartRequest, {});

  const requestConfig: RequestConfig = {
    id,
    ...config
  };

  return requestConfig;
};

export const onResponse = (response: AxiosResponse | Response) => {
  const store = useStore();

  const id = (response.config as RequestConfig).id;

  store.dispatch(AllActionTypes.REQUEST.EndRequest, id);

  return response;
};

export const onError = async (error: RequestError) => {
  const store = useStore();

  const id = (error.response.config as RequestConfig).id;

  store.dispatch(AllActionTypes.REQUEST.EndRequest, id);

  return Promise.reject(error);
};

api.interceptors.request.use(onRequest);
api.interceptors.response.use(onResponse, onError);

export default api;