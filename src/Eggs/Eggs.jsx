import React, { useEffect } from "react";
import Gif from "./eggpattern.gif";
import WhiteLogo from "../Copy of logo white.png";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Eggs = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./Eggs.css");
  }, []);

  return (
    <>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn eggs-more">
        MORE!
      </div>
      <img
        src={WhiteLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />
      <div className="eggs-float">
        <p>
          The queen bee lays 2000 eggs everday,
          <br />
          thats 1 egg every 45 seconds{" "}
        </p>
        <h4>
          OVER A MILLION EGGS <br />
          IN HER LIFE TIME !
        </h4>
      </div>
      <div className="gif-background-eggs"></div>
    </>
  );
};

export default Eggs;
