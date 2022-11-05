import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SCSS/Body.scss";
import { setFlags } from "../redux/action";

export const FlagDetails = () => {
  const quote = useSelector((store) => store.quotesData);

  const { name } = useParams();
  const dispatch = useDispatch();

  const loadFlagDetails = () => {
    fetch(`https://restcountries.com/v2/all/${name}`)
      .then((res) => res.json())
      .then((respond) => {
        console.log(respond);
        dispatch(setFlags(respond.data.payload[name]));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadFlagDetails();
  }, []);

  return (
    <>
      <div className="container">
        <br />
        {quote.map((el, i) => (
          <div key={i} class="card-text">
            <div className="population">
              <span style={{ display: "flex", fontSize: "15px" }}>
                <b>Native Name</b> : {el.nativeName}
              </span>
            </div>
            <br />
            <div className="population">
              <span style={{ display: "flex", fontSize: "15px" }}>
                <b>Subregion</b> : {el.subregion}
              </span>
            </div>
            <div className="region">
              <span style={{ display: "flex", fontSize: "15px" }}>
                <b>Currencies</b> : {el.currencies.name}
              </span>
            </div>
            <div className="capital">
              <span style={{ display: "flex", fontSize: "15px" }}>
                <b>Languages</b> : {el.languages.name}
              </span>
            </div>
            <div className="capital">
              <span style={{ display: "flex", fontSize: "15px" }}>
                <b>Borders</b> : {el.borders}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
