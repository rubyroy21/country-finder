import React, { useEffect } from "react";
import "./SCSS/AllFlags.css";
import { useNavigate } from "react-router-dom";
import { setAllData } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

export const AllFlags = () => {
  //   const [flags, setFlags] = useState([]);
  const stockData = useSelector((store) => store.stockData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = () => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setAllData(data));
      })
      .catch((err) => console.log(err));
  };
  const onSelect = () => {};

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {stockData.length === 0 ? (
        <>
          <div>
            <h3 className="noDAta">
              <BsFillExclamationTriangleFill className="noDataFound" /> No Data
              Available{" "}
              <BsFillExclamationTriangleFill className="noDataFound" />
            </h3>
          </div>
        </>
      ) : (
        <div class="cards">
          {stockData.map((el, i) => (
            <div class="card">
              <div class="thumbnail">
                <img src={el.flags.png} alt="" />
              </div>
              <div class="card-text">
                <h6 style={{ fontWeight: "bold", textAlign: "left" }}>
                  {el.name}
                </h6>
                <br />
                <div className="population">
                  <span style={{ display: "flex", fontSize: "15px" }}>
                    <b>Poplation</b> : {el.population}
                  </span>
                </div>
                <div className="region">
                  <span style={{ display: "flex", fontSize: "15px" }}>
                    <b>Region</b> : {el.region}
                  </span>
                </div>
                <div className="capital">
                  <span style={{ display: "flex", fontSize: "15px" }}>
                    <b>Capital</b> : {el.capital}
                  </span>
                </div>
              </div>
              <div class="card-buttons">
                <Button
                  className="btn"
                  colorScheme="blue"
                  size="sm"
                  onClick={() => {
                    onSelect(el.name);
                    navigate(`/flags/${el.name}`);
                  }}
                >
                  <Link to={"*"} className="login">
                    More Details
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
