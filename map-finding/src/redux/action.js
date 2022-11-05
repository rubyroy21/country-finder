import {
  CHECK_EXPIRY,
  GET_ALL_DATA,
  SEARCH_DATA,
  SET_QUOTES,
  SORTED_ASC,
  SORTED_QUOTES,
} from "./actionTypes";
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

export const sortedQuotes = (payload) => {
  return {
    type: SORTED_QUOTES,
    payload,
  };
};

export const setQuotes = (payload) => {
  return {
    type: SET_QUOTES,
    payload,
  };
};

export const checkExpiryTime = (payload) => {
  return {
    type: CHECK_EXPIRY,
    payload,
  };
};
