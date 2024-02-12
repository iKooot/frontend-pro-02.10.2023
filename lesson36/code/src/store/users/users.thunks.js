import { addUsersAction } from "./users.action";

export function fetchUsers(args, controller) {
    return async function fetchUsersThunk(dispatch, getState) {
        console.log(getState())
        console.log('this is thunk args => ', args)
        const resp = await fetch(`https://reqres.in/api/users`, {
            signal: controller.signal
        });
        const { data } = await resp.json();

        const preparedData = data.map(el => ({
            id: el.id,
            name:  el.first_name,
            surname:  el.last_name
        }))

        dispatch(addUsersAction(preparedData))
    }
}