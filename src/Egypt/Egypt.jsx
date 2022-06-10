import React, { useEffect, useState } from "react";
import BlackLogo from "../Copy of logo_black.png";
import ReactAudioPlayer from "react-audio-player";
import background_noise from "./Walk Like an Egyptian.mp3";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const backgroundReact = new Audio(background_noise);
const Egypt = ({ More }) => {
  const [volume, SetVolume] = useState(false);
  const send = useNavigate();
  useEffect(() => {
    import("./Egypt.css");
    return () => {
      console.log("Unmounted");
      backgroundReact.pause();
    };
  }, []);
  const VolumeControler = () => {
    SetVolume(!volume);
    // const element = document.getElementById("dance-video");
  };

  useEffect(() => {
    if (volume === true) {
      backgroundReact.play();
    } else {
      backgroundReact.pause();
    }
  });
  return (
    <>
      <div onClick={VolumeControler}>
        {volume ? (
          <img src="volumeBlack.png" className="volume dance" alt="" />
        ) : (
          <img src="muteBlack.png" className="volume dance" alt="" />
        )}
      </div>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn egypt-more"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn egypt-more">
        MORE!
      </div>
      <div className="egypt-float">
        <p>
          Bee keeping
        
          has been practiced
          <br />
          since the time of antiant egyptians
        </p>
        <h4>OVER 5,000 YEARS AGO</h4>
      </div>

      <div className="Egypt-background">
        <img
          src={BlackLogo}
          onClick={() => {
            send("/");
          }}
          className="logo black"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Egypt;
