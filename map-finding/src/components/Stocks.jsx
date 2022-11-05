import React from "react";
import { Logo } from "../assets/Logo";
import "./SCSS/Header.scss";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Stocks = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="navbar">
          <Link to={"*"}>
            <p>Pricing</p>
          </Link>
          <Link to={"*"}>
            <p>About</p>
          </Link>
          <Link to={"*"}>
            <p>Learning</p>
          </Link>
          <Link to={"*"}>
            <p>Tools</p>
          </Link>
          <Button className="btn" colorScheme="blue" size="sm">
            <Link to={"*"} className="login">
              Login
            </Link>
          </Button>
        </div>
      </div>
      <div className="headerSpacing"></div>
    </>
  );
};
