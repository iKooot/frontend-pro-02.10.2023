import { get, post } from "./httpClient";

export async function getUsers(signal) {
  return await get({ url: "users", signal });
}
export async function getUser(id, signal) {
  return await get({ url: `user/${id}`, signal });
}

export async function signIn(data, signal) {
  return await post({ url: "login", signal, data });
}

export async function signUp(data, signal) {
  return await post({ url: "login", signal, data });
}
