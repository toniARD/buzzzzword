import $ from "jquery";

function Data(params) {
  var dataLayer = [window.dataLayer];
  //   console.log("dataLayer", window);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-110660976-1");

  var q, u, a, c, k;
  function x() {
    return Math.floor(Math.random() * 255);
  }
  q = $(".bill");
  u = [];
  a = "aaayyy";
  c = $("body");
  k = ["asdfasdf"];
  c.append(u[Math.floor(Math.random() * u.length)]);
  document.title = k[Math.floor(Math.random() * k.length)].toUpperCase();
  $(this).bind("touchstart touchmove mousemove", function (e) {
    e.preventDefault();
    if (e.originalEvent.touches) {
      e = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    }
    q.show().css({ left: e.pageX, top: e.pageY });
    /*mixpanel.track("moved", {left:e.pageX,top:e.pageY});*/ c.append(
      '<img src="Asset 1@2x.png" style="display: block; left: ' +
        (e.pageX + Math.random() * 10) +
        "px; top: " +
        (e.pageY + Math.random() * 10) +
        'px">'
    );
  });
  setInterval(function () {
    c.css("background", "rgb(" + x() + "," + x() + "," + x() + ")");
  }, 400);
  var GoSquared = {};
  GoSquared.acct = "GSN-947162-E";
  (function (e) {
    function t() {
      e._gstc_lt = +new Date();
      var t = document,
        n = t.createElement("script");
      n.type = "text/javascript";
      n.src = "../d1l6p2sc9645hc.cloudfront.net/tracker.html";
      var r = t.getElementsByTagName("script")[0];
      r.parentNode.insertBefore(n, r);
    }
    e.addEventListener
      ? e.addEventListener("load", t, false)
      : e.attachEvent("onload", t);
  })(window);

  var infolinks_pid = 3295810;
  var infolinks_wsid = 1;
}
setTimeout(
  Data,

  1000
); //execute greet after 2000 milliseconds (2 seconds)
