let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let sumHome = 0;
let sumGuest = 0;

homeScore.innerHTML = 0;
guestScore.textContent = 0;


//Additions for Home side
function add1Home(){
    sumHome += 1;
    homeScore.innerHTML = sumHome;
}

function add2Home(){
    sumHome += 2;
    homeScore.innerHTML = sumHome;
}

function add3Home(){
    sumHome += 3;
    homeScore.innerHTML = sumHome;
}


//Additions for Guest side
function add1Guest(){
    sumGuest += 1;
    guestScore.textContent = sumGuest;
}

function add2Guest(){
    sumGuest += 2;
    guestScore.textContent = sumGuest;
}

function add3Guest(){
    sumGuest += 3;
    guestScore.textContent = sumGuest;
}