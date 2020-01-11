import "/svg4everybody/dist/svg4everybody.min.js";
import "/bootstrap/dist/js/bootstrap.min.js";
import "/wow.js/dist/wow.min.js";

function openNav() {
  document.querySelector(".myNav").style.width = "100%";
}

function closeNav() {
  document.querySelector(".myNav").style.width = "0%";
}

new WOW().init();
