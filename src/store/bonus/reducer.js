import types from "./types";

const initialState = {
  currentQuantity: null,
  dateBurning: null,
  forBurningQuantity: null,
  typeBonusName: null,
  error: null,
  isLoading: false,
};

export const bonus = (state = initialState, action) => {
  console.log("bonus action >>>", action);

  switch (action.type) {
    case types.FETCH_BONUS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case types.FETCH_BONUS_SUCCESS:
      return { ...state, isLoading: false, error: null, ...action.data };
    case types.FETCH_BONUS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
