import React, { useEffect } from "react";
import InfoGif from "./logoanimation_clear.gif";
import BlackLogo from "../Copy of logo_black.png";
import WhiteLogo from "../Copy of logo white.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";
const InfoLayer = ({ path, More }) => {
  const send = useNavigate();

  useEffect(() => {
    import("./InfoLayer.css");
  });
  console.log("InfoLayer", path);
  return (
    <>
      <div
        onClick={() => {
          send(-1);
        }}
        className="wtf-btn"
      >
        Oh Ok
      </div>
      <div onClick={More} className="more-btn">
        MORE!
      </div>
      <div className="info-layer main-container">
        <div className="info-block-center">
          <img src={InfoGif} alt="" />{" "}
          <div className="info-blocks-wrapper row">
            <div className="info-block col-lg-3 col-md-3 col-12">
              <h4>WHAT?</h4>
              <p>
                BUZZWORD is a newage fast witted form of learning designed to
                triger our most modern sences: fomo, clickbaiting
                <br /> &<br /> reading rediculously small amount of text
              </p>
            </div>
            <div className="info-block col-lg-3 col-md-3 col-12">
              <h4>HOW?</h4>
              <p>
                using type, design and the wonders of javascript to create a
                deeper learning experiance.
              </p>
            </div>
            <div className="info-block col-lg-3 col-md-3 col-12">
              <h4>WHY?</h4>
              <p>
                bees are perhaps the most important animal on the planet. we
                should get to know them.
              </p>
            </div>
            <div className="info-block col-lg-3 col-md-3 col-12">
              <h4>WHO? WHERE? WHEN?</h4>
              <p>
                Toni Dawer graphic designer and animal nerd.
                <br /> Bezalel Acadamy of Art and Design/visual communication
                <br /> June 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoLayer;
