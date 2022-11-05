/* eslint-disable array-callback-return */
import { GET_ALL_DATA, SEARCH_DATA, SET_FLAGS } from "./actionTypes";
import { SET_ALL_DATA } from "./actionTypes";

const initialState = {
  stockData: [],
  backupData: [],
  quotesData: [],
  backupQuotesData: [],
};

const reducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DATA: {
      return store;
    }
    case SET_ALL_DATA: {
      return { ...store, stockData: payload, backupData: payload };
    }
    case SEARCH_DATA: {
      let searchArr = [];
      store.backupData.map((el, i) => {
        if (el.name.toLowerCase().includes(payload.toLowerCase())) {
          searchArr.push(el);
        }
      });
      return !payload
        ? { ...store, stockData: [...store.backupData] }
        : { ...store, stockData: [...searchArr] };
    }
    case SET_FLAGS: {
      let dummyData = [...payload];
      return { ...store, quotesData: dummyData, backupQuotesData: dummyData };
    }
    default:
      return store;
  }
};

export { reducer };
