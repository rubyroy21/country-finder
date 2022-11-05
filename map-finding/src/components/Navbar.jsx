import React from "react";
import "./SCSS/Header.scss";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <h1>Country Finder</h1>
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
