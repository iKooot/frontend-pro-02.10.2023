import {useContext, useEffect, useState} from "react";
import {UserInfoContext, UserInfoDispatchContext} from "../Context";
import {ADD_USER, ERROR, LOADING, SUCCESS} from "../services/state/userInfo";

export function useRegistration() {
    const [body, setBody] = useState(null)
    const { loading, error, token } = useContext(UserInfoContext);
    const dispatch = useContext(UserInfoDispatchContext);

    const submitHandler = (data) => {
        setBody(data)
    }

    useEffect(() => {
        if (!body) return
        const controller = new AbortController();
        async function logInUser() {
            try {
                dispatch({ type: LOADING });
                const resp = await fetch("https://reqres.in/api/register", {
                    signal: controller.signal,
                    method: "POST",
                    body,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await resp.json();

                if (resp.status >= 400) {
                    dispatch({ type: ERROR, payload: data.error });
                    return;
                }

                console.log()

                dispatch({ type: SUCCESS, payload: data });
                dispatch({ type: ADD_USER, payload: body });
            } catch (e) {
                dispatch({ type: ERROR, payload: e.message });
            }
        }

        logInUser();

        return () => {
            controller.abort();
        };
    }, [body, dispatch]);

    return {
        loading,
        error,
        token,
        submitHandler
    };
}