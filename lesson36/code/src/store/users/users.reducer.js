// initialState

import { ADD_USER, REMOVE_USER, CLEAR_USERS, ADD_USERS } from "./users.action";

const initialState = {
  users: [],
};

// action === { type: EXAMPLE payload: { name: 'Example' } }
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      // here must to be logic of calculation or changing state (without side effect)

      const newState = {
        ...state,
        users: [...state.users, action.payload],
      };
      return newState;
    }
    case ADD_USERS: {
      // here must to be logic of calculation or changing state (without side effect)
      const newState = {
        ...state,
        users: [...state.users, ...action.payload],
      };
      return newState;
    }
    case REMOVE_USER: {
      return {
        ...state,
        users: state.users.filter( el => el.id === action.payload),
      };
    }
    case CLEAR_USERS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
