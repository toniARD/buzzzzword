import React, { useEffect } from "react";
// import Bg from "./asdgashsdhasdj.PNG";
// import Lady from "./LADYS_croped.jpg";
import RedSpray from "./spray.png";
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
const LandingPage2 = ({ More }) => {
  const send = useNavigate();

  useEffect(() => {
    import("./LandingPage2.css");
  }, []);

  return (
    <>
      <img
        src={BlackLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black logo-landing-page2"
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
              <span></span>
              {/* <p className="very-bold">Bees</p>

              <p className="are">are</p>
              <p className="very-bold">Awesome</p> */}
              <p className="very-bold">This Month</p>

              <p className="are">PLASTIC</p>

              <p className="thin-para">
                welcome to BUZZWORD
                <br /> a newage fast moving form of leraning
              </p>
            </p>
            <p className="long-para-landing-page">CLICK.LAUGH.LEARN. REPEAT</p>
            <button className="no-border">Coming Soon</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage2;
