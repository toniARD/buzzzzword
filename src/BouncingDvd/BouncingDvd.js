import React, { useEffect } from "react";
import WhiteLogo from "../Copy of logo white.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";

const BouncingDvd = ({ More }) => {
  const send = useNavigate();
  useEffect(() => {
    import("./BouncingDvd.css");
  }, []);

  const Dvd = () => {
    console.log("called");
    let x = 0,
      y = 0,
      dirX = 1,
      dirY = 1;
    const speed = 2;
    const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
    let dvd = document.getElementById("dvd");
    dvd.style.backgroundColor = pallete[x];
    let prevColorChoiceIndex = 0;
    let black = document.getElementById("black");
    const dvdWidth = dvd.clientWidth;
    const dvdHeight = dvd.clientHeight;

    function getNewRandomColor() {
      const currentPallete = [...pallete];
      currentPallete.splice(prevColorChoiceIndex, 1);
      const colorChoiceIndex = Math.floor(
        Math.random() * currentPallete.length
      );
      prevColorChoiceIndex =
        colorChoiceIndex < prevColorChoiceIndex
          ? colorChoiceIndex
          : colorChoiceIndex + 1;
      const colorChoice = currentPallete[colorChoiceIndex];
      return colorChoice;
    }
    function animate() {
      const screenHeight = document.body.clientHeight;
      const screenWidth = document.body.clientWidth;

      if (y + dvdHeight >= screenHeight || y < 0) {
        dirY *= -1;
        dvd.style.backgroundColor = getNewRandomColor();
      }
      if (x + dvdWidth >= screenWidth || x < 0) {
        dirX *= -1;

        dvd.style.backgroundColor = getNewRandomColor();
      }
      x += dirX * speed;
      y += dirY * speed;
      dvd.style.left = x + "px";
      dvd.style.top = y + "px";
      window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate);
  };
  setTimeout(Dvd, 1000); //execute greet after 2000 milliseconds (2 seconds)
  return (
    <>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn dvd bounc-more"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn dvd bounc-more">
        MORE!
      </div>
      <img
        src={WhiteLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black"
        alt="logo"
      />
      <div className="bouncing-float">
        <p>Honey has no expiration date </p>
        <h4>YOU CAN EAT IT FOREVER</h4>
      </div>
      <div id="black">
        <div id="dvd"></div>
      </div>
    </>
  );
};

export default BouncingDvd;
