import React, { useEffect } from "react";
import FlowerVid from "./kolidascope_5.mp4";
import BlackLogo from "../Copy of logo_black.png";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const FlowerVideo = ({ More }) => {
  const send = useNavigate();
  const registerVideo = (bound, video) => {
    bound = document.querySelector(bound);
    video = document.querySelector(video);
    const scrollVideo = () => {
      if (video.duration) {
        const distanceFromTop =
          window.scrollY + bound.getBoundingClientRect().top;
        const rawPercentScrolled =
          (window.scrollY - distanceFromTop) /
          (bound.scrollHeight - window.innerHeight);
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

        video.currentTime = video.duration * percentScrolled;
      }
      requestAnimationFrame(scrollVideo);
    };
    requestAnimationFrame(scrollVideo);
  };

  useEffect(() => {
    import("./FlowerVideo.css");
    registerVideo("#bound-one", "#bound-one video");

    registerVideo("#bound-two", "#bound-two video");

    registerVideo("#bound-three", "#bound-three video");
  });

  return (
    <>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn flower-more"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn flower-more">
        MORE!
      </div>
      <div className="flower-float">
        <p>
          Individual bees tend to focus
          <br />
          on one kind of flower at a time
          <br />
          a single bee colony can
          <br />
          pollinate up to
        </p>
        <br />
        <h4>
          20 MILLION <br />
          FLOWERS A DAY
        </h4>
      </div>
      <img
        style={{ zIndex: "10000000", position: "fixed" }}
        src={BlackLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />
      <div class="app">
        <div id="bound-one" class="scroll-bound">
          <div class="content">
            <p>UseLess Website 1</p>
            <video width="600" muted preload>
              <source src={FlowerVid} type="video/webm" />
              <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerVideo;
