var toggle = document.querySelector("#switch");
var modeText = document.querySelector("#mode-text")



toggle.addEventListener("click", function(){
    if (toggle.checked == true){
        // light mode
        modeText.textContent = "light mode";
        console.log("checkbox checked")
        modeToggleLight();
        modeToggleDark();
    }
    else {
        // dark mode
        modeText.textContent = "dark mode";
        console.log("checkbox not checked")  
        modeToggleLight();
        modeToggleDark();
    };
})

var socialDash = document.querySelector(".socialDash");
var cards = document.querySelectorAll(".cards-dark");
var topBackground = document.querySelector(".top-background");
var modeTextColor = document.querySelector(".mode-text-dark")

function modeToggleLight (){
    socialDash.classList.toggle("background-light");
    topBackground.classList.toggle("top-background-light");
    modeTextColor.classList.toggle("mode-text-light");
    for (var i = 0; i < cards.length; i++){
        cards[i].classList.toggle("cards-light");
    }
};

function modeToggleDark (){
    socialDash.classList.toggle("background-dark");
    topBackground.classList.toggle("top-background-dark");
    modeTextColor.classList.toggle("mode-text-dark");
    for (var i = 0; i < cards.length; i++){
        cards[i].classList.toggle("cards-dark");
    }
};
