import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { setAllData } from "../redux/action";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const Tables = () => {
  //   const [data, setData] = useState([]);

  const stockData = useSelector((store) => store.stockData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://prototype.sbulltech.com/api/v2/instruments")
      .then((res) => {
        let arr = res.data.split("\n");
        let mock = [];
        let head = arr.reverse().pop();
        let { Symbol, Name, Sector } = head;
        arr.map((el) => {
          if (el !== "") {
            let response = el.split(",");
            mock.push({
              Symbol: response[0],
              Name: response[1],
              Sector: response[2],
            });
          }
        });
        // setData(mock);
        dispatch(setAllData(mock));
      })
      .catch((err) => console.log("err", err));
  };

  const onSelect = () => {};

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="tabless">
        {stockData.length === 0 ? (
          <>
            <div>
              <h3 className="noDAta">
                <BsFillExclamationTriangleFill className="noDataFound" /> No
                Data Available{" "}
                <BsFillExclamationTriangleFill className="noDataFound" />
              </h3>
            </div>
          </>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((el, i) => (
                  <tr
                    onClick={() => {
                      onSelect(el.Symbol);
                      navigate(`/quotes/${el.Symbol}`);
                    }}
                    key={i}
                  >
                    <td>{i + 1}</td>
                    <td>{el.Symbol}</td>
                    <td>{el.Name}</td>
                    <td>{el.Sector}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </>
  );
};
