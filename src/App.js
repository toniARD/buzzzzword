import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Fly from "./Fly/Fly";
import FindTheQueen from "./find-the-queen/find-the-queen";
import FlowerVideo from "./FlowerVideo/FlowerVideo";
import BouncingDvd from "./BouncingDvd/BouncingDvd";
import InfoLayer from "./InfoLayer/InfoLayer";
import BlackLogo from "./Copy of logo_black.png";
import WhiteLogo from "./Copy of logo white.png";
// import GifVideo from "./GifVideo/GifVideo";
import Eggs from "./Eggs/Eggs";
import Egypt from "./Egypt/Egypt";
import Error from "./Error/Error";
import LandingPage2 from "./LandingPage2/LandingPage2";
import Zoom from "./Zoom/Zoom";
import Ultraviolet from "./Ultraviolet/Ultraviolet";
import Radio from "./Radio/Radio";
import Dance from "./Dance/Dance";
import BearAttack from "./BearAttack/BearAttack";
import Shadows from "./Shadows/Shadows";

const Websites = [
  "/Error",
  "/Radio",
  "/Flower-Scroll",
  "/Eggs",
  "/Fly",
  "/Egypt",
  "/Bouncing-Dvd",
  "/Find-the-Queen",
  "/Zoom",
  "/Dance",
  "/Ultraviolet",
  "/Bear-Attack",
];

function App(props) {
  const send = useNavigate();
  // const history = useHistory();
  const location = useLocation();

  const [volume, SetVolume] = useState(false);
  const [index, SetIndex] = useState(0);
  // const [layer, SetLayer] = useState(false);
  // const [layer, SetLayer] = useState(false);

  // console.log(props.history);
  console.log(location);
  const LayerToggle = () => {
    send("/InfoLayer");
  };

  useEffect(() => {
    var element;
    if (location && location.pathname === "/Bouncing-Dvd") {
      element = document.getElementsByClassName("wtf-btn");
      element[0].style.backgroundColor = "white";
      element = document.getElementsByClassName("more-btn");
      element[0].style.backgroundColor = "white";
    }
  });

  const More = () => {
    if (location && location.pathname === "/") {
      SetIndex(0);
      console.log("We are on Homepage");
      window.open(
        "https://buzzzzword.herokuapp.com" + Websites[index],
        "_blank"
      );
      SetIndex(index + 1);
    } else if (location && location.pathname === "/Bear-Attack") {
      console.log("Last React Website");
      window.open(
        "https://buzzzzzword.herokuapp.com/buzzon/index.html",
        "_self"
      );
    } else if (location && location.pathname === "/Error") {
      send(Websites[index + 1]);
      SetIndex(index + 2);
    } else {
      send(Websites[index]);
      SetIndex(index + 1);
    }

    // // 1 less than total
    // if (index === Websites.length - 1) {
    //   SetIndex(0);
    // }
  };

  return (
    <div className="parentComponent">
      {/* {(location && location.pathname === "/") ||
      (location && location.pathname === "/LandingPage2") ? null : (
        <div className="more-btn">MORE!</div>
      )}
      {location && location.pathname === "/InfoLayer" ? null : (
        <div onClick={LayerToggle} className="wtf-btn">
          WTF
        </div>
      )}

      {(location && location.pathname === "/") ||
      (location && location.pathname === "/LandingPage2") ? null : (
        <div className="more-btn">MORE!</div>
      )} */}

      <Routes>
        {/* <Route exact path="/" element={<LandingPage More={More} />} />
        <Route
          exact
          path="/LandingPage2"
          element={<LandingPage2 More={More} />}
        />
        <Route exact path="/InfoLayer" element={<InfoLayer More={More} />} />
        <Route
          exact
          path="/Flower-Scroll"
          element={<FlowerVideo More={More} />}
        />
        <Route exact path="/Egypt" element={<Egypt More={More} />} />
        <Route exact path="/Eggs" element={<Eggs More={More} />} />
        <Route exact path="/Zoom" element={<Zoom More={More} />} />
        <Route exact path="/Error" element={<Error More={More} />} />
        <Route
          exact
          path="/Bouncing-Dvd"
          element={<BouncingDvd More={More} />}
        />
        <Route
          exact
          path="/Ultraviolet"
          element={<Ultraviolet More={More} />}
        />
        <Route exact path="/Dance" element={<Dance More={More} />} />

        <Route exact path="/Fly" element={<Fly More={More} />} />
        <Route
          exact
          path="/Find-The-Queen"
          element={<FindTheQueen More={More} />}
        />
        <Route exact path="/Bear-Attack" element={<BearAttack More={More} />} />
        <Route exact path="/Radio" element={<Radio More={More} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
