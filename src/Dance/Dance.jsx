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

const Dance = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./Dance.css");
  }, []);

  return (
    <>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn "
      >
        WTF
      </div>
      <div onClick={More} className="more-btn ">
        MORE!
      </div>
      <div>
        <video width="750" height="500" muted autoPlay={true}>
          <source alt="video" width="100px" src={Video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Dance;
