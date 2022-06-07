import React, { useEffect } from "react";
import Image from "./largedog.png";
import BlackLogo from "../Copy of logo_black.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Zoom = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    const zoomElement = document.querySelector(".workspace");
    let zoom = 1;
    const ZOOM_SPEED = 0.1;

    window.document.addEventListener("wheel", function (e) {
      console.log(zoom);

      if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
      } else {
        if (zoom > 0.2) {
          zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
        }
      }
    });
  }, []);

  useEffect(() => {
    import("./Zoom.css");
  }, []);

  return (
    <>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn zoom-more"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn zoom-more">
        MORE!
      </div>
      <img
        src={BlackLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />
      <div className="zoom-float">
        <p>Only the honey bee is talked about but there are over </p>
        <h4>20,000 DIFFERENR KIND OF BEES</h4>
      </div>
      <img src={Image} width="100px" className="workspace " alt="asfd" />
    </>
  );
};

export default Zoom;
