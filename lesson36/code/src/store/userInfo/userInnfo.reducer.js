// initialState
import {
  ADD_USER_INFO,
  CLEAR_USER_INFO,
} from "./userInfo.action";

const initialState = {
  id: null,
  name: null,
  surname: null,
};

// action === { type: EXAMPLE payload: { name: 'Example' } }
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_INFO: {
      // here must to be logic of calculation or changing state (without side effect)
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    }
    case CLEAR_USER_INFO: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
