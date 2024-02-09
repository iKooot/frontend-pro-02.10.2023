import {SUCCESS, LOADING, ERROR, ADD_USER, RESET_USER, AUTH_USER} from "./userInfo.actions";

const initialState = {
  loading: false,
  error: null,
  user: null,
  auth: false,
};

export function userInfoReducer(state, { type, payload }) {
  switch (type) {
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        user: { ...state.user, token: payload },
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case ADD_USER: {
      return {
        ...state,
        user: { ...state.user, ...payload },
      };
    }
    case RESET_USER: {
      return initialState;
    }
    case AUTH_USER: {
      return {
        ...state,
        auth: payload
      };
    }
    default: {
      return state;
    }
  }
}

export const initialUserInfoState = initialState;
