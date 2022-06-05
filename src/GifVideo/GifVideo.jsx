import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import "./GifVideo.css";
import { $, jQuery } from "jquery";
export default function GifVideo() {
  useEffect(() => {});

  const GifVideoScript = () => {
    var app = window.Eel || (window.Eel = {});
    var $window = $(window);

    var currentPosition = 0;
    var targetPosition = 0;
    var browserWidth = 0;

    var loadedImages = 0;

    var autorun = function () {
      $("#eelimage1")
        .one("load", function () {
          imageLoaded();
        })
        .each(function () {
          if (this.complete) $(this).load();
        });

      $("#eelimage2")
        .one("load", function () {
          imageLoaded();
        })
        .each(function () {
          if (this.complete) $(this).load();
        });

      $("#eelimage3")
        .one("load", function () {
          imageLoaded();
        })
        .each(function () {
          if (this.complete) $(this).load();
        });

      $("#eelimage4")
        .one("load", function () {
          imageLoaded();
        })
        .each(function () {
          if (this.complete) $(this).load();
        });

      $("#eelimage1").attr("src", "stripesmall1.jpg");
      $("#eelimage2").attr("src", "stripesmall2.jpg");
      $("#eelimage3").attr("src", "smallstrip3.jpg");
      $("#eelimage4").attr("src", "stripesmall4.jpg");
      //$("#eelimage3").attr("src", "images/new3.jpg");

      //startSlap();
    };

    var imageLoaded = function () {
      loadedImages++;

      if (loadedImages === 4) {
        $("#loader").animate({ opacity: 0 }, 500, "linear", function () {
          $("#loader").css("display", "none");
        });
        setTimeout(function () {
          $("#allimages").css("display", "block");
          $("#allimages").animate({ opacity: 1 }, 3000, "linear");
          if (isTouchDevice()) {
            setTimeout(function () {
              $("#introtext").css("display", "block");
              $("#introtext").html(
                "Drag your finger across the screen to slap!"
              );
              $("#introtext").css("display", "block");
              $("#introtext").animate({ opacity: 1 }, 1000, "linear");

              setTimeout(function () {
                $("#introtext").animate(
                  { opacity: 0 },
                  1000,
                  "linear",
                  function () {
                    $("#introtext").css("display", "none");
                  }
                );
              }, 3000);
            }, 1000);
          }

          startSlap();
        }, 500);
      }
    };

    var startSlap = function () {
      browserWidth = $(window).width();

      setInterval(function () {
        currentPosition += (targetPosition - currentPosition) / 4;
        var currentSlap = (currentPosition / 640) * 90;
        currentSlap = Math.min(90, Math.max(0, currentSlap));
        var pos = Math.round(currentSlap) * -640;

        $("#allimages").css("left", pos);
      }, 30);

      $("body").bind("mousemove", function (e) {
        // $('#status').html(e.pageX +', '+ e.pageY);
        targetPosition =
          640 -
          Math.max(
            0,
            Math.min(640, e.pageX - $("#eelcontainer").offset().left)
          );
        //targetPosition = browserWidth - (e.pageX - $('#eelcontainer').offset().left);
        // console.log(targetPosition);
        $("#bugger").html(targetPosition);
      });

      // $("body").bind("touchmove", function (e) {
      //   e.preventDefault();
      //   var touch = event.targetTouches[event.targetTouches.length - 1];
      //   $("#bugger").html(
      //     "TOUCH: " + touch.pageX + ", " + event.targetTouches.length
      //   );
      //   targetPosition = browserWidth - touch.pageX;
      // });

      $(window).resize(function () {
        browserWidth = $(window).width();
      });
    };

    var isTouchDevice = function () {
      var el = document.createElement("div");
      el.setAttribute("ongesturestart", "return;");
      return typeof el.ongesturestart === "function";
    };

    // On DOM ready
    $(autorun);
  };
  setTimeout(GifVideoScript, 1000); //execute greet after 2000 milliseconds (2 seconds)
  return (
    <div id="eelcontainer" class="eel">
      {/* <div id="loader">LOADING...</div>
      <div id="introtext">yo</div> */}
      <div id="allimages">
        <img
          alt="asdf"
          class="eelimages"
          id="eelimage1"
          src="./stripesmall1.jpg"
          width="15360"
          height="480"
        />
        <img
          alt="asdf"
          class="eelimages"
          id="eelimage2"
          src="./stripesmall1.jpg"
          width="14720"
          height="480"
        />
        <img
          alt="asdf"
          class="eelimages"
          id="eelimage3"
          src="./stripesmall1.jpg"
          width="15360"
          height="480"
        />
        <img
          alt="asdf"
          class="eelimages"
          id="eelimage4"
          src="./stripesmall1.jpg"
          width="14720"
          height="480"
        />
      </div>
    </div>
  );
}
