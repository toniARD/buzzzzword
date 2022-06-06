import React, { useEffect } from "react";
import Video from "./backgroundvideo_withsound (online-video-cutter.com).mp4";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";
import BlackLogo from "../Copy of logo_black.png";
const Dance = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./Dance.css");
  }, []);

  return (
    <>
      <div className="video-scroll">
        <img
          src={BlackLogo}
          onClick={() => {
            send("/");
          }}
          className="logo black dance-logo"
          alt="logo"
        />
        <div className="dance-float">
          <p>
            Bees can communicate complex food locations <br />
            by using a special dance language.
          </p>

          <h4>GET JIGGY WITH IT</h4>
        </div>
        <div
          onClick={() => {
            send("/InfoLayer");
          }}
          className="wtf-btn dance-more"
        >
          WTF
        </div>
        <div onClick={More} className="more-btn dance-more">
          MORE!
        </div>

        <video width="750" height="500" muted autoPlay={true}>
          <source alt="video" width="100px" src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Dance;
