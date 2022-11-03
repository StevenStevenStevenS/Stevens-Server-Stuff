// VARIABLES
// Pages
const home          = document.getElementById("home");
const portfolio     = document.getElementById("portfolio");
const commissions   = document.getElementById("commissions");
const about         = document.getElementById("about");
const contact       = document.getElementById("contact");

// Portfolio Pages
const primary       = document.getElementById("primary");
const wizard_game   = document.getElementById("wizard-game");
const gunner        = document.getElementById("gunner");
const for_fun       = document.getElementById("for-fun");
const asbt          = document.getElementById("a-single-birds-tabernacle");


// Change page to URL specified anchor.  Used on page load to allow users
// to share specific strips. Otherwise, home would always be defaulted.
function metaChangePage() {
    id = location.hash.substring(1);
    
    if(id != "") {
        changePage(id);
    } else {
        changePage("home");
    }
}

// Change page
function changePage(id) {
    hide();
    show(id);
}

// Show a specific page
function show(id) {
    element = document.getElementById(id);
    element.style.display = "block";
}

// Hide all pages
function hide() {
    home.style.display = "none";
    portfolio.style.display = "none";
    commissions.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";

    primary.style.display = "none";
    wizard_game.style.display = "none";
    gunner.style.display = "none";
    for_fun.style.display = "none";
    asbt.style.display = "none";
}