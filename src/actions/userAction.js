import axios from "axios";
import Swal from "sweetalert2";
import { env } from "../config/environment";

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

export const setLoading = (payload) => ({
  type: "LOADING",
  payload,
});

export const setError = (payload) => ({
  type: "ERROR",
  payload,
});

export const logout = () => {
  return (dispatch) => {
    dispatch(loginRequest());
  };
};

export const login = (payload) => {
  return (dispatch) => {
    dispatch(setError(null));
    dispatch(setLoading(true));
    axios
      .post(env.apiAuth, payload)
      .then((response) => {
        dispatch(loginRequest(response.data));
        dispatch(setLoading(false));
        window.location.href = "/Dashboard";
      })
      .catch((err) => {
        dispatch(setError(err));
        dispatch(setLoading(false));
        Swal.fire("Error", "Wrong username or password!", "error");
      });
  };
};
