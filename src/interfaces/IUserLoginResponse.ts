/**
 * This interface is used to set the response from the server when login in
 */
export interface IUserLoginResponse {
  username: string;
  email: string;
  token: string;
}
