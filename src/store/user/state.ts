
export type UserState = {
  loading: boolean,
  userInfo: Record<string, any> | null;
  error: Record<string, any> | null;
  accessToken: string;
};

export const state: UserState = {
  loading: false,
  userInfo: {},
  error: null,
  accessToken: ''
};
