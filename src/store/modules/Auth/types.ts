export enum AuthTypes {
  SINGN_LOAD = '@auth/load',
  SINGN_IN_USER = '@auth/singnin',
  SING_OUT_USER = '@auth/singout',
  SIGNIN_ERROR = '@auth/errorsingin',
}

export interface UserCredentialsSing {
  login: string;
}

export interface DTOLoadPayload {
  payload: {data: UserCredentialsSing};
}

export interface UserState {
  id: string;
  email?: string | null;
  name: string;
  bio?: string;
  company?: string | null;
  blog?: string | null;
  html_url: string;
  avatar_url: string;
  login: string;
  repos_url: string;
  location?: string | null;
  hireable?: boolean;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at: string;
}

export interface AuthState {
  user: UserState | null;
  error?: string;
  logged: boolean;
  loading: boolean;
}

export interface SingnInSucessPayload {
  user: UserState;
}
