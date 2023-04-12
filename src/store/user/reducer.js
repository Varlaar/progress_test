import types from "./types";

const initialState = {
  accessToken: null,
  isLoading: false,
  error: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOKEN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case types.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        accessToken: action.accessToken,
      };
    case types.FETCH_TOKEN_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
