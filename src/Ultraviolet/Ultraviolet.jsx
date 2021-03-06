import React, { useEffect, useState } from "react";
import Purple from "./purple_text.gif";
import Red from "./red_text.gif";
import WhiteLogo from "../Copy of logo white.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const Ultraviolet = ({ More }) => {
  const send = useNavigate();
  const [red, SetRed] = useState(true);

  useEffect(() => {
    import("./Ultraviolet.css");
  }, []);

  const REDFunction = () => {
    SetRed(!red);
  };
  return (
    <>
      <div className="ultra-parent">
        <img
          src={WhiteLogo}
          onClick={() => {
            send("/");
          }}
          className="logo black"
          alt="logo"
        />
        <div
          onClick={() => {
            send("/InfoLayer");
          }}
          className="wtf-btn ultra ultra-more"
        >
          WTF
        </div>
        <div onClick={More} className="more-btn ultra ultra-more">
          MORE!
        </div>
        {red ? (
          <img src={Red} alt="" width="83%" />
        ) : (
          <img src={Purple} alt="" width="83%" />
        )}

        <form>
          <input
            onClick={REDFunction}
            type="checkbox"
            id="pure-toggle-5"
            hidden
          />
          <label class="pure-toggle brick switch" for="pure-toggle-5">
            <span class="fontawesome-ok ok"></span>
            <span class="fontawesome-remove no ok"></span>
          </label>
        </form>
      </div>
    </>
  );
};

export default Ultraviolet;
