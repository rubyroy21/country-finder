/* eslint-disable array-callback-return */
import { sortedQuotes } from "./action";
import {
  CHECK_EXPIRY,
  GET_ALL_DATA,
  SEARCH_DATA,
  SET_QUOTES,
  SORTED_QUOTES,
} from "./actionTypes";
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
        if (
          el.Name.toLowerCase().includes(payload.toLowerCase()) ||
          el.Symbol.toLowerCase().includes(payload.toLowerCase())
        ) {
          searchArr.push(el);
        }
      });
      return !payload
        ? { ...store, stockData: [...store.backupData] }
        : { ...store, stockData: [...searchArr] };
    }
    case SET_QUOTES: {
      let dummyData = [
        ...payload,
        {
          time: "2023-10-12 19:10:46",
          price: 17388.932633802062,
          valid_till: "2023-10-28 12:03:48",
        },
        {
          time: "2024-10-28 12:03:46",
          price: 17388.932633802062,
          valid_till: "2024-10-28 12:03:48",
        },
        {
          time: "2025-10-28 12:03:46",
          price: 17388.932633802062,
          valid_till: "2025-10-28 12:03:48",
        },
      ];
      return { ...store, quotesData: dummyData, backupQuotesData: dummyData };
    }
    case SORTED_QUOTES: {
      var sortedDates = store.quotesData.sort(function (var1, var2) {
        var a = new Date(var1.time),
          b = new Date(var2.time);
        if (a > b) return payload ? -1 : 1;
        if (a < b) return payload ? 1 : -1;
        return 0;
      });
      return { ...store, quotesData: [...sortedDates] };
    }
    case CHECK_EXPIRY: {
      return { ...store, quotesData: payload, backupQuotesData: payload };
    }
    default:
      return store;
  }
};

export { reducer };
