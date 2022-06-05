import React, { useEffect } from "react";
// import Bg from "./asdgashsdhasdj.PNG";
import Child from "./child.jpg";
import GreenSpray from "./green spray.png";
import star from "./star.gif";
import WhiteLogo from "../Copy of logo white.png";
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
      <img src={WhiteLogo} className="logo black" alt="logo" />

      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn"
      >
        WTF
      </div>

      <div className="landing-page-container">
        <div className="wrapper">
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
              <p className="very-bold">Bees</p>

              <p className="are">are</p>
              <p className="very-bold">Awesome</p>
              <p className="thin-para">
                welcome to BUZZWORD
                <br /> a newage fast moving form of leraning
              </p>
            </p>
            <p className="long-para-landing-page">CLICK.LAUGH.LEARN. REPEAT</p>
            <button onClick={More}>LET ME SHOW YOU</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
