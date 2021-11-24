import axios from "axios";
import jquery from "jquery";
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
  EMPLOYEE_REGISTER_FAILED
} from "./Types";




export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
        Accept: "application/json",
        'X-CSRFToken': csrftoken
      },
    };

    try {
      const res = await axios.get(
        `https://jabtracanand.herokuapp.com/accounts/user/`,
        config
      );

      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOAD_USER_FAILS,
      });
    }
  } else {
    dispatch({
      type: LOAD_USER_FAILS,
    });
  }
};



export const login = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'X-CSRFToken': csrftoken
    },
  };


  const body = JSON.stringify({ email });

  try {
    const res = await axios.post(
      `https://jabtracanand.herokuapp.com/accounts/login/`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(load_user());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


export const signup = (email, domain, password) => async dispatch => {
  const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  };

  const body = JSON.stringify({  email, domain, password });

  try {
      const res = await axios.post('https://jabtracanand.herokuapp.com/accounts/register/', body, config);

      dispatch({
          type: SIGN_UP_SUCCESS,
          payload: res.data
      });
  } catch (err) {
      dispatch({
          type: SIGN_UP_FAIL
      })
  }
};


export const checkAuthenticated = (email) => async dispatch => {
  if (localStorage.getItem('token')) {
      const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${localStorage.getItem("token")}`,
            Accept: "application/json",
            'X-CSRFToken': csrftoken,
          }
      }; 

      try {
        const res = await axios.get(
          `https://jabtracanand.herokuapp.com/accounts/user/`,
          config
        );
        dispatch(load_user()); 
        dispatch({
          type: AUTHENTICATED_SUCCESS,
          payload: res.data,
        });

      dispatch(load_user());  
      } catch (err) {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } else {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  };



var csrftoken = getCookie('csrftoken');

const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jquery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}



export const logout = () => (dispatch) => {
  if (localStorage.getItem("token")) {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `token ${localStorage.getItem("token")}`,
    //     Accept: "application/json",
    //     'X-CSRFToken': csrftoken
    //   },
    // };

    try {
      const res = axios.post(
        `https://jabtracanand.herokuapp.com/accounts/logout/`,
      );
        console.log('logout success')
      dispatch({
        type: LOGOUT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGOUT,
      });
    }
  }
}
  


export const employeecount = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
        Accept: "application/json",
        'X-CSRFToken': csrftoken
      },
    };

    try {
      const res = await axios.get(
        `https://jabtracanand.herokuapp.com/accounts/count/`,
        config
      );

      dispatch({
        type: EMPLOYEE_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: EMPLOYEE_LIST_FAILED,
      });
    }
  } else {
    dispatch({
      type: EMPLOYEE_LIST_FAILED,
    });
  }
};


export const empcreate = (name, first_dose, second_dose , both, not_both ) => async dispatch => {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("token")}`,
        Accept: "application/json",
        'X-CSRFToken': csrftoken
      },
    };

  const body = JSON.stringify({ name, first_dose, second_dose , both, not_both  });

  try {
      const res = await axios.post('https://jabtracanand.herokuapp.com/accounts/emp/', body, config);

      dispatch({
          type: EMPLOYEE_REGISTER_SUCCESS,
          payload: res.data
      });
  } catch (err) {
      dispatch({
          type: EMPLOYEE_REGISTER_FAILED
      })
  }
}
};