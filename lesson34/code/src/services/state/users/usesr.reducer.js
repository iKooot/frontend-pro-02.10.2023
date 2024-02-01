import { ERROR, SUCCESS, LOADING } from "./users.actions";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

export function usersReducer(state, action) {
  switch (action.type) {
    case SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
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
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const initialUsersState = initialState;
