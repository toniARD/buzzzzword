import React, { useEffect } from "react";
// import Bg from "./asdgashsdhasdj.PNG";
// import Child from "./child.jpg";
import GreenSpray from "./green spray.png";
import star from "./star.gif";
import BlackLogo from "../Copy of logo_black.png";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";
const LandingPage = ({ LayerToggle, More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./LandingPage.css");
  }, []);

  return (
    <>
      <img
        src={BlackLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black landing-page-logo"
        alt="logo"
      />

      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn landing-green"
      >
        WTF
      </div>

      <div className="landing-page-container green bees">
        <div className="wrapper green ">
          <p className="date-top">June 2022</p>
          <p
            onClick={() => {
              send("/LandingPage2");
            }}
            className="date-bottom"
          >
            July 2022 Coming Soon
          </p>
          <div className="content">
            <p className="main-para-intro">
              <span>
                <img src={star} alt="star" />
              </span>
              <span></span>
              {/* <p className="very-bold">Bees</p>

              <p className="are">are</p>
              <p className="very-bold">Awesome</p> */}
              <p className="very-bold">This Time</p>

              <p className="are">BEES</p>

              <p className="thin-para">
                Welcome to BUZZword
                <br /> the newage fast moving form of learning.
              </p>
            </p>
            <p className="long-para-landing-page">
              CLICK. LAUGH. LEARN. REPEAT.
            </p>
            <button className="landing-green" onClick={More}>
              LET ME SHOW YOU
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
