import types from "./types";
import { requestAccessToken } from "./api";

export const fetchAccessToken = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_TOKEN_REQUEST,
  });

  try {
    const response = await requestAccessToken({
      idclient: "2c44d8c2-c89a-472e-aab3-9a8a29142315",
      accessToken: "",
      paramName: "device",
      paramValue: "7db72635-fd0a-46b9-813b-1627e3aa02ea",
      latitude: 0,
      longitude: 0,
      sourceQuery: 0,
    });
    dispatch({
      type: types.FETCH_TOKEN_SUCCESS,
      accessToken: response.data.accessToken,
    });
    return response.data.accessToken;
  } catch (error) {
    dispatch({
      type: types.FETCH_TOKEN_FAILURE,
      error: error.message,
    });
  }
};
