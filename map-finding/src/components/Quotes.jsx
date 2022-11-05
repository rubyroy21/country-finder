import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./SCSS/Body.scss";
import { checkExpiryTime, setQuotes, sortedQuotes } from "../redux/action";

export const Quotes = () => {
  // const [quote, setQuote] = useState([]);
  const [arrowUpDown, setArrowUpDown] = useState(true);
  const quote = useSelector((store) => store.quotesData);

  const { symbol } = useParams();
  const dispatch = useDispatch();

  const loadQuote = async () => {
    const res = await axios.get(
      `https://prototype.sbulltech.com/api/v2/quotes/${symbol}`
    );
    dispatch(setQuotes(res.data.payload[symbol]));
  };

  const handleRotate = () => {
    setArrowUpDown(!arrowUpDown);
    dispatch(sortedQuotes(arrowUpDown));
  };

  const checkExpiry = () => {
    let date = new Date();
    let dateArr = [];
    quote.map((el) => {
      let date1 = new Date(el.valid_till);
      if (date < date1) {
        dateArr.push(el);
      }
    });
    quote.length !== dateArr.length && dispatch(checkExpiryTime(dateArr));

    console.log("datearr", dateArr);
  };

  useEffect(() => {
    loadQuote();
  }, []);

  useEffect(() => {
    checkExpiry();
  }, [quote]);
  return (
    <>
      <div className="container">
        <br />

        <div className="tables-quotes">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Price</th>
                <th className="time-stamp">
                  Time
                  <span>
                    <AiOutlineArrowUp
                      onClick={handleRotate}
                      className={arrowUpDown ? "arrow-up" : "arrow-down"}
                    />
                  </span>
                </th>
                <th>Valid Till</th>
              </tr>
            </thead>
            <tbody>
              {quote.map((el, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.price}</td>
                  <td>{el.time}</td>
                  <td>{el.valid_till}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="footer-css">
        <h3>
          I have 3 more mock timestamps in the data, because just to see the
          expiry date is working properly or not.
        </h3>
      </div>
    </>
  );
};
