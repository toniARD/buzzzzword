import React, { useEffect } from "react";
import Gif from "./eggpattern.gif";
import WhiteLogo from "../Copy of logo white.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Shadows = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./Shadows.css");
    import("./scripts.js");
    return () => {
      import("../Ultraviolet/Ultraviolet.css");
    };
  });

  return (
    <>
      <div className="shadows-parent">
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
        <img src="Asset 1@2x.png" class="bill" />
      </div>
    </>
  );
};

export default Shadows;
