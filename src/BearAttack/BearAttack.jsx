import React, { useState, useEffect } from "react";
import Icon from "./danger.png";
import Logo from "./logo white.png";
import WhiteLogo from "../Copy of logo white.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useHistory,
  useLocation,
} from "react-router-dom";
// import CreateImage from "./createImages";
const BearAttack = ({ More }) => {
  const send = useNavigate();
  const [counter, SetCounter] = useState([
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
    { data: "asdfdasf" },
  ]);

  function getRandomTop(min, max) {
    return Math.random() * (max - min) + min + "vh";
  }

  function getRandomLeft(min, max) {
    return Math.random() * (max - min) + min + "vw";
  }

  useEffect(() => {
    import("./BearAttack.css");
  });
  console.log(counter);

  const CloseDiv = (e, id) => {
    console.log(id);
    document.getElementById(id).style.display = "none";
  };

  const height = "500px";
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

      <div className="App Bear-Container bear-attack-back">
        {/* <CreateImage /> */}
        {counter
          ? counter.map((item, id) => (
              <div
                class="modal fade show"
                id={id}
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                style={{
                  display: "block",
                  marginTop: getRandomTop(1, 80),
                  marginLeft: getRandomLeft(-1, 85),
                  // position: "absolute",
                }}
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <img src={Logo} alt="" />
                    </div>
                    <div class="modal-body">
                      <div className="d-flex icon-text-wrapper">
                        <div className="icon">
                          <img src={Icon} alt="" />
                        </div>
                        <div className="text">Bear Detected!</div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        onClick={(e) => {
                          CloseDiv(e, id);
                        }}
                        type="button"
                        class="closebutton"
                      >
                        ATTACK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "zero"}

        {/* <div className="container-fluid">
        {Array.map((item) => item)}
        {form === false ? (
          <>
            {" "}
            {EditAddress === false ? (
              <Autocomplete
                apiKey={process.env.api}
                onPlaceSelected={(place) => {
                  console.log(place);
                  SetPlace(place);
                }}
              />
            ) : null}
            {EditAddress === true ? (
              <>
                <div className="below">
                  <p>Address</p>
                  <p>
                    Return to{" "}
                    <span
                      onClick={() => {
                        SetEditAddress(false);
                      }}
                    >
                      address search
                    </span>{" "}
                  </p>
                </div>
                <br />
                <form>
                  <div class="form-group">
                    <label for="inputAddress2">Street</label>
                    <input
                      type="text"
                      class="form-control"
                      id="street"
                      placeholder=""
                      required
                    />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Zip Code</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress2">Country</label>
                    <input
                      type="text"
                      class="form-control"
                      id="country"
                      placeholder=""
                      required
                    />
                  </div>
                  <button type="submit" onClick={CheckFields}>
                    Submit form
                  </button>
                </form>
              </>
            ) : (
              <div className="below">
                <p>Address</p>
                <p>
                  Can’t find your address?{" "}
                  <span
                    onClick={() => {
                      SetEditAddress(true);
                    }}
                  >
                    Edit
                  </span>{" "}
                </p>
              </div>
            )}
            <br />
            {placeObject && placeObject.formatted_address ? (
              <iframe
                title="Afadsfads"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDR3E0Ko3uYrfQaqX9964woDyJ8NoDn4tg
          &q=${placeObject.formatted_address}`}
                width="600"
                height="450"
                zoom
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : null}
            <br />
            {placeObject ? (
              <>
                <h2>Address:</h2>
                <p>{placeObject.formatted_address}</p>
              </>
            ) : null}
            <br />
            <br />
            {EditAddress === false ? (
              <button
                onClick={() => {
                  SetForm(!form);
                }}
              >
                Submit form
              </button>
            ) : null}
          </>
        ) : null}

        {form ? <h1>Form Has Been Submitted</h1> : null}
        <pre>
          {form && placeObject && placeObject.formatted_address
            ? JSON.stringify(data, undefined, 2)
            : null}
        </pre>

        <pre>
          {EditAddress === true && form && fields === true
            ? JSON.stringify(data, undefined, 2)
            : null}
        </pre>
      </div> */}
      </div>
    </>
  );
};

export default BearAttack;
