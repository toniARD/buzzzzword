import React, { useEffect, useState } from "react";

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
  const [volume, SetVolume] = useState(false);

  const send = useNavigate();
  useEffect(() => {
    import("./Dance.css");
  }, []);

  const VolumeControler = () => {
    SetVolume(!volume);
    const element = document.getElementById("dance-video");
    if (volume === true) {
      element.muted = true;
    } else {
      element.muted = false;
    }
  };

  return (
    <>
      <div className="video-scroll">
        <div onClick={VolumeControler}>
          {volume ? (
            <img src="volumeBlack.png" className="volume dance" alt="" />
          ) : (
            <img src="muteBlack.png" className="volume dance" alt="" />
          )}
        </div>

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

        <video
          id="dance-video"
          width="750"
          height="500"
          muted="true"
          autoPlay={true}
        >
          <source alt="video" width="100px" src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Dance;
