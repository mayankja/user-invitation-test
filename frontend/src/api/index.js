import axios from "axios";
import {
  GET_USER,
  GET_INVITES,
  ADD_INVITES,
  DELETE_INVITES,
  FAILED_OPERATION,
} from "../redux/constants";

const api = (method, url, data) => {
  return axios({ method: method, url: `http://localhost:8000${url}`, data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const getUser = () => {
  return (dispatch) => {
    return api("get", "/user")
      .then((res) => dispatch({ type: GET_USER, data: res.data }))
      .catch((err) => {
        dispatch({
          type: FAILED_OPERATION,
          data: "Error while fetching user!",
        });
      });
  };
};

export const createUser = (data) => {
  return (dispatch) => {
    return api("post", "/user", data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        dispatch({
          type: FAILED_OPERATION,
          data: "Error while creating user!",
        });
      });
  };
};

export const getInvitation = () => {
  return (dispatch) => {
    return api("get", "/invitation")
      .then((res) => {
        dispatch({ type: GET_INVITES, data: res.data });
      })
      .catch((err) => {
        dispatch({
          type: FAILED_OPERATION,
          data: "Error while fetching invite!",
        });
      });
  };
};

export const createInvitation = (data) => {
  return (dispatch) => {
    return api("post", "/invitation", data)
      .then((res) => {
        dispatch({ type: ADD_INVITES });
      })
      .catch((err) => {
        dispatch({ type: FAILED_OPERATION, data: "Cannot create invite!" });
      });
  };
};

export const deleteInvitation = (data) => {
  return (dispatch) => {
    return api("delete", "/invitation", data)
      .then((res) => {
        dispatch({ type: DELETE_INVITES });
      })
      .catch((err) => {
        dispatch({ type: FAILED_OPERATION, data: "Cannot delete invite!" });
      });
  };
};
