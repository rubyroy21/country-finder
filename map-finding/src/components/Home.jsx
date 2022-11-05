import React, { useState } from "react";
import "./SCSS/Body.scss";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BsFillBackspaceFill } from "react-icons/bs";
import { searchData } from "../redux/action";
import { Link } from "react-router-dom";
import { AllFlags } from "./AllFlags";

export const Home = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch(searchData(e.target.value));
  };

  const handleClick = () => {
    setText("");
    dispatch(searchData(""));
  };

  return (
    <>
      <div className="home">
        <h2 className="fnt">Trade Options like a Pro</h2>
        <p className="text">
          Strategy Builder, Virtual Trading, Free Option Chain, Open Interest,
          Free <br /> Market Analysis, Positions Analysis, and much more
        </p>
        <ButtonGroup gap="4" className="btn-group">
          <Link to="*">
            <Button className="tryForNew" colorScheme="messenger">
              Try for free
            </Button>
          </Link>
          <Link to={"*"}>
            <Button className="tryForNew" colorScheme="blue" variant="outline">
              Download app
            </Button>
          </Link>
        </ButtonGroup>
        <br />
        <div className="main">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={text}
              onChange={handleChange}
            />
            <Button
              className="search-btn"
              onClick={handleClick}
              colorScheme="messenger"
            >
              <BsFillBackspaceFill className="icon-btn" />
            </Button>
          </div>
        </div>
        {/* <Tables /> */}
        <AllFlags />
      </div>
    </>
  );
};
