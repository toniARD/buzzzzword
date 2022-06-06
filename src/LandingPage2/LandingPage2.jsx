import React, { useEffect } from "react";
// import Bg from "./asdgashsdhasdj.PNG";
import Lady from "./LADYS_croped.jpg";
import RedSpray from "./spray.png";
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
const LandingPage2 = ({ More }) => {
  const send = useNavigate();

  useEffect(() => {
    import("./LandingPage2.css");
  }, []);

  return (
    <>
      <img
        src={WhiteLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />

      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn landpage-red"
      >
        WTF
      </div>
      <div className="landing-page-container">
        <div className="wrapper">
          <p className="date-top">July 2022</p>
          <p className="date-bottom">August 2022 Coming Soon</p>
          <div className="content">
            <p className="main-para-intro">
              <span>
                <img src={star} alt="star" />
              </span>
              <p className="very-bold">Plastic bags</p>

              <p className="are">are</p>
              <p className="very-bold">Interesting</p>
              <p className="thin-para">
                welcome to BUZZWORD
                <br /> a newage fast moving form of leraning
              </p>
            </p>
            <p className="long-para-landing-page">CLICK.LAUGH.LEARN. REPEAT</p>
            <button className="no-border">Coming soon</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage2;
