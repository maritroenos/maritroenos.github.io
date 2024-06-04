let button1 = document.querySelector("button.klikker");
let kliks = 0;

function optellen() {
    kliks = kliks + 1;
    const getalveranderen = document.getElementById("teller").innerHTML = kliks;
	if (kliks < 10) {
		kliks + 0;
    }
   else if (kliks >= 10 && kliks < 30) {
        kliks += 1;
    }
    else {
        kliks += 9;
    }
    console.log(kliks);
}

// Zelfonderzoek audio spelen bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio en https://www.youtube.com/watch?v=3xlws5og44U

function afspelen() {
    let geluid = new Audio("./Geluid/yaysound.mp3"); // bron audio yay: https://www.youtube.com/watch?v=MxgNlLH4bKU
    geluid.play();
    console.log(geluid);
}

//function wrapped in function bron n https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
function telgeluid() {
    optellen();
    afspelen();
}
button1.addEventListener("click", telgeluid);
console.log(telgeluid);

const kleuren = ["#FFDFF6", "#F3C9E2", "#EB9EC7"];
let kleur = 0;
function achtergrond() {
	document.body.style.backgroundColor = kleuren[kleur];
	kleur = kleur + 1;
	if (kleur >= kleuren.length) {
		kleur = 0;
	}
	console.log(kleur);
}
setInterval(achtergrond, 2000);

// Verschillende hello kitty profielen bron https://nl.pinterest.com/pin/hello-kitty-animated-gif--1145181011476907464/

let button2 =document.getElementById("dansen");
let verwissel = document.getElementById("pfp");
function danskat() {
    verwissel.src = "./afbeeldingen/hkmoving.gif";
 }
 button2.addEventListener("click", danskat);
 
 let button3 =document.getElementById("aardbei");
 function aardbeikat() {
    verwissel.src = "./afbeeldingen/hkaardbei.gif";
 }
 button3.addEventListener("click", aardbeikat);

