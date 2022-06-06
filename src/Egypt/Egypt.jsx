import React, { useEffect } from "react";
import BlackLogo from "../Copy of logo_black.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Egypt = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./Egypt.css");
  }, []);

  return (
    <>
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
          <br />
          has been practice
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
