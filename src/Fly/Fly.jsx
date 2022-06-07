import React, { useEffect, useState } from "react";
import fly from "./fly.gif";
import splat from "./splat.gif";
import ReactAudioPlayer from "react-audio-player";
import background_noise from "./background_noise.mp3";
import click_sound from "./click_sound.mp3";

import BlackLogo from "../Copy of logo_black.png";
import VolumeIcon from "./afc445b1-b91b-451e-85df-a0788a9ffa4f.svg";
import MuteIcon from "./f974e30f-891f-4677-ae5c-5b99a4a74200.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Fly = ({ More }) => {
  const [volume, SetVolume] = useState(true);
  const audio = new Audio(click_sound);
  const backgroundReact = new Audio(background_noise);
  const send = useNavigate();
  console.log("backgroundReact", backgroundReact);
  useEffect(() => {
    import("./Fly.css");
    // backgroundReact.play();
    return () => {
      console.log("Unmounted");
      backgroundReact.pause();
    };
  });
  // for (let index = 1; index < 76; index++) {
  //   console.log("dot-" + index);
  //   let element = document.getElementsByClassName("dot-" + index);
  //   // let image = document.createElement(<img className="fly-image" width="100px" src={fly} alt="" />
  // <img className="splat-image" width="100px" src={splat} />);
  //   if (element[0]) {
  //     console.log(element[0]);
  //     // element[0].textContent(<img className="fly-image" width="100px" src={fly} alt="" />
  // <img className="splat-image" width="100px" src={splat} />);
  //   }
  // }
  // const PlayMusic = () => {
  //   console.log("working");
  //   backgroundReact.play();
  //   // backgroundReact.loop = true;
  // };

  // backgroundReact.loop = true;
  // console.log(backgroundReact);
  const beeClicked = (e) => {
    console.log("clicked");
    let element = e.target.offsetParent;
    // console.log(element.children[0].children[0]);
    // Hide Fly gif
    element.children[0].children[0].style.display = "none";
    // Show splat
    element.children[0].children[1].style.display = "block";
    // element.style.display = "none";
    if (volume === true) {
      audio.play();
    }
    backgroundReact.play();
    // PlayMusic();
  };

  useEffect(() => {
    if (volume === true) {
      // element.muted = true;
      backgroundReact.play();
    } else {
      // element.muted = false;
      backgroundReact.pause();
    }
  }, [volume]);

  const VolumeControler = () => {
    SetVolume(!volume);
    // const element = document.getElementById("dance-video");
  };

  return (
    <>
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
        className="wtf-btn Fly fly-more"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn Fly fly-more">
        MORE!
      </div>
      <img
        src={BlackLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />{" "}
      <div className="fly-float">
        <p>
          Bess can sit sting many times <br />
          when fighting other insects{" "}
        </p>
        <h4>KILL THE FLYS.</h4>
      </div>
      <div className="bg">
        {/* <ReactAudioPlayer
        src={background_noise}
        autoPlay={true}
        loop={true}
        allow="autoplay"
        controls
      /> */}
        {/* <iframe
        title="asdfads"
        src={background_noise}
        allow="autoplay"
        style={{ display: "none" }}
        id="iframeAudio"
      ></iframe> */}
        <div onClick={beeClicked} className="dotWrapper dotWrapper-1">
          <div className="dot dot-1">
            <img className="splat-image" width="100px" src={fly} />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-2">
          <div className="dot dot-2">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-3">
          <div className="dot dot-3">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-4">
          <div className="dot dot-4">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-5">
          <div className="dot dot-5">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-6">
          <div className="dot dot-6">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-7">
          <div className="dot dot-7">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-8">
          <div className="dot dot-8">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-9">
          <div className="dot dot-9">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-10">
          <div className="dot dot-10">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-11">
          <div className="dot dot-11">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-12">
          <div className="dot dot-12">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-13">
          <div className="dot dot-13">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-14">
          <div className="dot dot-14">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-15">
          <div className="dot dot-15">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-16">
          <div className="dot dot-16">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-17">
          <div className="dot dot-17">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-18">
          <div className="dot dot-18">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-19">
          <div className="dot dot-19">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-20">
          <div className="dot dot-20">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-21">
          <div className="dot dot-21">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-22">
          <div className="dot dot-22">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-23">
          <div className="dot dot-23">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-24">
          <div className="dot dot-24">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-25">
          <div className="dot dot-25">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-26">
          <div className="dot dot-26">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-27">
          <div className="dot dot-27">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-28">
          <div className="dot dot-28">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-29">
          <div className="dot dot-29">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-30">
          <div className="dot dot-30">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-31">
          <div className="dot dot-31">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-32">
          <div className="dot dot-32">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-33">
          <div className="dot dot-33">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-34">
          <div className="dot dot-34">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-35">
          <div className="dot dot-35">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-36">
          <div className="dot dot-36">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-37">
          <div className="dot dot-37">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-38">
          <div className="dot dot-38">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-39">
          <div className="dot dot-39">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-40">
          <div className="dot dot-40">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-41">
          <div className="dot dot-41">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-42">
          <div className="dot dot-42">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-43">
          <div className="dot dot-43">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-44">
          <div className="dot dot-44">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-45">
          <div className="dot dot-45">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-46">
          <div className="dot dot-46">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-47">
          <div className="dot dot-47">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-48">
          <div className="dot dot-48">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-49">
          <div className="dot dot-49">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-50">
          <div className="dot dot-50">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-51">
          <div className="dot dot-51">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-52">
          <div className="dot dot-52">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-53">
          <div className="dot dot-53">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-54">
          <div className="dot dot-54">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-55">
          <div className="dot dot-55">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-56">
          <div className="dot dot-56">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-57">
          <div className="dot dot-57">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-58">
          <div className="dot dot-58">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-59">
          <div className="dot dot-59">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-60">
          <div className="dot dot-60">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-61">
          <div className="dot dot-61">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-62">
          <div className="dot dot-62">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-63">
          <div className="dot dot-63">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-64">
          <div className="dot dot-64">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-65">
          <div className="dot dot-65">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-66">
          <div className="dot dot-66">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-67">
          <div className="dot dot-67">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-68">
          <div className="dot dot-68">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-69">
          <div className="dot dot-69">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-70">
          <div className="dot dot-70">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-71">
          <div className="dot dot-71">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-72">
          <div className="dot dot-72">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-73">
          <div className="dot dot-73">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-74">
          <div className="dot dot-74">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
        <div onClick={beeClicked} className="dotWrapper dotWrapper-75">
          <div className="dot dot-75">
            <img className="fly-image" width="100px" src={fly} alt="" />
            <img className="splat-image" width="100px" src={splat} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fly;
