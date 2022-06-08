import React, { useEffect, useState } from "react";
import fly from "./fly.gif";
import splat from "./splat.gif";
import ReactAudioPlayer from "react-audio-player";
import background_noise from "./background_noise.mp3";
import click_sound from "./click_sound.mp3";

import BlackLogo from "../Copy of logo_black.png";
import VolumeIcon from "./afc445b1-b91b-451e-85df-a0788a9ffa4f.svg";
import MuteIcon from "./f974e30f-891f-4677-ae5c-5b99a4a74200.svg";
import RadioBack from "./buzzradio.png";
import FM from "./FMAM.PNG";
import YellowLogo from "./Asset 1_2x.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Songs = [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
];

const Radio = ({ More }) => {
  const [volume, SetVolume] = useState(true);
  const [activeButton, SetActiveButton] = useState("");
  const [index, SetIndex] = useState(0);
  const audio = new Audio(click_sound);
  // const backgroundReact = new Audio("./mp3/1.mp3");
  const send = useNavigate();
  // console.log("backgroundReact", backgroundReact);

  useEffect(() => {
    import("./Radio.css");
  }, []);

  // useEffect(() => {
  //   // backgroundReact.play();
  //   return () => {
  //     console.log("Unmounted");
  //     backgroundReact.pause();
  //   };
  // });

  // const beeClicked = (e) => {
  //   console.log("clicked");
  //   let element = e.target.offsetParent;
  //   // console.log(element.children[0].children[0]);
  //   // Hide Fly gif
  //   element.children[0].children[0].style.display = "none";
  //   // Show splat
  //   element.children[0].children[1].style.display = "block";
  //   // element.style.display = "none";
  //   if (volume === true) {
  //     audio.play();
  //   }
  //   backgroundReact.play();
  //   // PlayMusic();
  // };

  // useEffect(() => {
  //   if (volume === true) {
  //     // element.muted = true;
  //     backgroundReact.play();
  //   } else {
  //     // element.muted = false;
  //     backgroundReact.pause();
  //   }
  // }, [volume]);

  // const VolumeControler = () => {
  //   SetVolume(!volume);
  //   // const element = document.getElementById("dance-video");
  // };

  const RadioButton = (e) => {
    const element = document.getElementById(e.target.id);
    if (activeButton === "") {
      SetActiveButton(e.target.id);
      element.style.borderTop = "3px solid black";
      SetIndex(e.target.id);
    } else {
      document.getElementById(activeButton).style.border = "none";
      element.style.borderTop = "3px solid black";
      SetActiveButton(e.target.id);
      SetIndex(e.target.id);
    }
    // console.log("index", index, "=====", "./mp3/" + index + ".mp3");
    // const backgroundReact = new Audio("./mp3/" + index + ".mp3");
    // backgroundReact.play();
  };

  return (
    <>
      <ReactAudioPlayer
        className="hide-player"
        src={`./mp3/${index}.mp3`}
        autoPlay
      />
      {/* <div onClick={VolumeControler}>
        {volume ? (
          <img src="volumeBlack.png" className="volume dance" alt="" />
        ) : (
          <img src="muteBlack.png" className="volume dance" alt="" />
        )}
      </div> */}
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn Radio-buttons radio-more"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn Radio-buttons radio-more">
        MORE!
      </div>
      <img
        src={YellowLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />{" "}
      <div className="radio-float">
        <p>
          Seeing things in our <br />
          everything life allows us
          <br />
          to accept them
        </p>
        <br />
        <h4>
          BEES ARE NOT SCARY
          <br />
          NOW SING ALONG
        </h4>
      </div>
      <div className="radio-container">
        <div className="radio-center">
          <img src={RadioBack} alt="" />
          <div className="btns-wrapper">
            <img src={FM} alt="" />
            {Songs.map((item, id) => (
              <div onClick={RadioButton} className="yellow-btn" id={id + 1}>
                <span onClick={RadioButton} id={id + 1}>
                  {id + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Radio;
