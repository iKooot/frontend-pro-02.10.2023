import { SUCCESS, LOADING, ERROR } from "./users.actions";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

export function usersReducer(state, { type, payload }) {
  switch (type) {
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        users: payload,
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
    default: {
      return state;
    }
  }
}

export const initialUsersState = initialState;
