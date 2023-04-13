import types from "./types";
import { requestBonus } from "./api";

export const fetchBonus = (accessToken) => async (dispatch) => {
  dispatch({
    type: types.FETCH_BONUS_REQUEST,
  });

  try {
    const response = await requestBonus(accessToken);
    dispatch({
      type: types.FETCH_BONUS_SUCCESS,
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_BONUS_FAILURE,
      error: error.message,
    });
  }
};
