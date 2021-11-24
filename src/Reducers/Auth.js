import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILS,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  LOGOUT,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAILED,
  EMPLOYEE_REGISTER_SUCCESS,
  EMPLOYEE_REGISTER_FAILED,
} from "../Actions/Types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        token: payload.data.token,
        user: payload.data.user_id,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.data.user_id,
      };

    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.data.user_id,
      };

    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: payload.data.user_id,
      };
    case EMPLOYEE_LIST_SUCCESS:
      return {
        ...state,
        data: payload.data,
      };
    case EMPLOYEE_LIST_FAILED:
      return {
        ...state,
        user: null,
      };

    case SIGN_UP_FAIL:
      return {
        ...state,
        user: null,
      };

    case LOAD_USER_FAILS:
      return {
        ...state,
        user: null,
      };

    case EMPLOYEE_REGISTER_SUCCESS:
      return {
        ...state,
        data: payload.data,
      };

    case EMPLOYEE_REGISTER_FAILED:
      return {
        ...state,
        user: null,
      };

    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
}
