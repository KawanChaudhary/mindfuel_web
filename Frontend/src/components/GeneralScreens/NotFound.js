import React from "react";
import "../../Css/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <div id="background"></div>
    <div class="top">
      <h1 className="h1-class">404</h1>
      <h3 className="h3-class">page not found</h3>
    </div>
    <div class="container">
      <div class="ghost-copy">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
      </div>
      <div class="ghost">
        <div class="face">
          <div class="eye"></div>
          <div class="eye-right"></div>
          <div class="mouth"></div>
        </div>
      </div>
      <div class="shadow"></div>
    </div>
    <div class="bottom">
      <p className="p-class">Boo, looks like a ghost stole this page!</p>
      <div class="buttons">
        <Link to="/" className="logo">
          <button class="btn">back to Home</button>
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
