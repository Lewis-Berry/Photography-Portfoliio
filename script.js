// alter navbar background colour when scrolling to end of div #1

var navBar = document.getElementById("navbar");

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800) {
        navBar.classList.add("scroll");
    } else {
        navBar.classList.remove("scroll");
    }
  };
