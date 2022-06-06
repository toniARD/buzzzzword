import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";
import "./FindTheQueen.css";
import CAFasdfs from "./PNG/2C.png";
import LogoCard from "./top_card.png";
import ClickSound from "./card lift.mp3";
import yas_queen from "./yas_queen-[AudioTrimmer.com].mp3";
import BlackLogo from "../Copy of logo_black.png";
const CardClick = new Audio(ClickSound);
const QueenFound = new Audio(yas_queen);

const Cards = [
  "./PNG/2C.png",
  "./PNG/2D.png",
  "./PNG/2H.png",
  "./PNG/2S.png",
  "./PNG/3C.png",
  "./PNG/3D.png",
  "./PNG/3H.png",
  "./PNG/3S.png",
  "./PNG/4C.png",
  "./PNG/4D.png",
  "./PNG/4H.png",
  "./PNG/4S.png",
  "./PNG/5C.png",
  "./PNG/5D.png",
  "./PNG/5H.png",
  "./PNG/5S.png",
  "./PNG/6C.png",
  "./PNG/6D.png",
  "./PNG/6H.png",
  "./PNG/6S.png",
  "./PNG/7C.png",
  "./PNG/7D.png",
  "./PNG/7H.png",
  "./PNG/7S.png",
  "./PNG/8C.png",
  "./PNG/8D.png",
  "./PNG/8H.png",
  "./PNG/8S.png",
  "./PNG/9C.png",
  "./PNG/9D.png",
  "./PNG/9H.png",
  "./PNG/9S.png",
  "./PNG/10C.png",
  "./PNG/10D.png",
  "./PNG/10H.png",
  "./PNG/10S.png",
  "./PNG/AC.png",
  "./PNG/AD.png",
  "./PNG/AH.png",
  "./PNG/AS.png",
  "./PNG/JC.png",
  "./PNG/JD.png",
  "./PNG/JH.png",
  "./PNG/JS.png",
  "./PNG/KC.png",
  "./PNG/KD.png",
  "./PNG/KH.png",
  "./PNG/KS.png",
  "./PNG/queen.png",
];
export default function FindTheQueen({ More }) {
  const send = useNavigate();
  const [number, SetNumber] = useState(null);
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };

  const images = importAll(
    require.context("./PNG", false, /\.(png|jpe?g|svg)$/)
  );
  // console.log(Cards);

  const generateRandom = async (maxLimit = 100) => {
    let rand = Math.random() * 49;
    console.log(rand); // say 99.81321410836433

    rand = Math.floor(rand); // 99

    return rand;
  };

  const ChangeCard = async () => {
    let number = await generateRandom();
    console.log(number);
    SetNumber(number);
  };

  useEffect(() => {
    if (number === 48) {
      console.log("Quene found at ", number);
      document.documentElement.style.setProperty("--chess-bg-color", "#ffff00");
      QueenFound.play();
    } else {
      CardClick.play();
      document.documentElement.style.setProperty("--chess-bg-color", "#df0000");
    }
  }, [number]);

  return (
    <>
      <img
        src={BlackLogo}
        onClick={() => {
          send("/");
        }}
        className="logo black dance-logo"
        alt="logo"
      />
      <div className="queen-float">
        <p>
          There can be as many as
          <br />
          80,000 bees in a hive but
          <br />
          only one queen
          <br />
        </p>
        <h4>FIND THE QUEEN</h4>
      </div>
      <div
        onClick={() => {
          send("/InfoLayer");
        }}
        className="wtf-btn queen-more"
      >
        WTF
      </div>
      <div onClick={More} className="more-btn queen-more">
        MORE!
      </div>
      <div className="Main-Card">
        {number === null ? (
          <img
            onClick={ChangeCard}
            src={LogoCard}
            className="card-image"
            alt="asdf"
          />
        ) : (
          <img
            onClick={ChangeCard}
            src={Cards[number]}
            className="card-image"
            alt="asdf"
          />
        )}
      </div>
      <main class="grid">
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>

        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>

        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>

        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>

        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>

        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>
        <b></b>

        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>

        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
        <b>
          <span></span>
        </b>
      </main>
    </>
  );
}