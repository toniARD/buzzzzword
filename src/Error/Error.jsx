import React, { useEffect } from "react";
import Bg from "./asdgashsdhasdj.PNG";
import GreenLogo from "./logo.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Error = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./Error.css");
  }, []);

  return (
    <>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn Error"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn Error">
        MORE!
      </div>
      <img
        src={GreenLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />
      <div className="Error-background">
        <img src={Bg} alt="" />{" "}
      </div>
    </>
  );
};

export default Error;
