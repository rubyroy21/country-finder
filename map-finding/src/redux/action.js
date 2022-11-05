import { GET_ALL_DATA, SEARCH_DATA, SET_FLAGS } from "./actionTypes";
import { SET_ALL_DATA } from "./actionTypes";

export const getAllData = (payload) => {
  return {
    type: GET_ALL_DATA,
    payload,
  };
};

export const setAllData = (payload) => {
  return {
    type: SET_ALL_DATA,
    payload,
  };
};

export const searchData = (payload) => {
  return {
    type: SEARCH_DATA,
    payload,
  };
};

export const setFlags = (payload) => {
  return {
    type: SET_FLAGS,
    payload,
  };
};
