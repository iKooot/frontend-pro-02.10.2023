import { get } from './httpClient';

export async function getUsers(signal) {
    return await get("users", signal);
}
