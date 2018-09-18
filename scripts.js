let melleknev = ["levizelt-kigúnyolt-kiröhögött", "orgoványi", "demens", "globális-kozmikus-közösségi", "pragmatikus-földközeli-vöröskatonás",
    "otthonszülős, dúlás, Ozora fesztiválos", "nyilas-ávós",
    "'civilnek', 'PC-nek' és persze mindenekelőtt 'humanitáriusnak nevezett'", "erőszakos, vadállati, fekáliával hajigáló",
    "deheroizálásban utazó", "saját szarukat hajigáló szubszaharai", "kulturális determináltságú", "végtelenül primitív és ostoba",
    "muníció nélkül maradt", "balos-libsi", "becstelen és aljas", "mentálisan és morálisan terhelt, illetve problémás", "nyolcelemis",
    "túlfinomult, idiótává züllött, rokokó",
    "önmagát túlélt, széthulló, rothadó", "akarattalan, felpuffadt, járóképtelen", "szánalmas, nyomorult", "harmadlagos frissességű",
    "erkölcsi értelemben és intellektuálisan is magasabb rendű"]

let fonev = ["indok-zsidók", "végtermékek", "nagy kalapácsos emberek", "kőfaragók", "hiénacsorda", "házmesterek", "sátánimádók", "orkok", 
    "disznófejű Nagyurak", "nyájas olvasók",  "atyafiak", "demográfiai katasztrófa rendbetevők", "ökörkör", "népelemek", "szpáhik", "janicsárok", 
    "defterdárok", "csótányok", "zsoldosok", "gazemberek", "megmondóemberek", "nyálfolytatók", "emésztőgödrök", "csokoládéhuszárok", "roncsok", 
    "egykor volt jobbikosok", "médiamunkások", "jakobinusok és bolsevikok örökös utódai", "Angela Merkel-lelkű robotok", "kedélyes elmeorvosok", 
    "Soros édesgyermekek"]

let generatedWordArr = [];

function getRandomIntInclusive(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

function generatedWord() {
    let firstPart = melleknev[getRandomIntInclusive(0, melleknev.length - 1)];
    let secondPart = fonev[getRandomIntInclusive(0, fonev.length - 1)]
    let karomkodas = firstPart + (" ") + secondPart;
    generatedWordArr.push(karomkodas);
    return karomkodas;
}

$(document).ready(function(){
	$("button").on("click", function(){
        $("#quoteDisplay").text(generatedWord());
	});
});







/*
//Prevents consecutive occurences
    do {
      randomIndex = Math.floor(Math.random() * quoteList.length);
      if(randomIndex !== previousRandom) {
        shuffle(randomIndex);
      }
    }
    while (randomIndex == previousRandom) {
      
      previousRandom = randomIndex;
      
    };
*/


/*
function newQuote() {

    let randomNumber = Math.floor(Math.random() * (melleknev.length));
    document.getElementById('quoteDisplay').innerHTML = melleknev[randomNumber];
}
*/

/*let karomkodas = melleknev + fonev;

$(document).ready(function(){
    $("button").on("click", function(){
        $("#karomkodas").text(generateText());
        $("h2").text(karomkodas);
    });
});
*/

/*Define random generator
function getRandomIntInclusive(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

//DOM manipulation using jQuery. When a button is clicked the generate text function is called.
$(document).ready(function(){
	$("button").on("click", function(){
		$("#karomkodas").text(generateText());
	});
});
*/

/*
let buttonElement = document.getElementById('btn');
// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.
buttonElement.addEventListener('click', function (event) {
    let ertek = $("h2").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek + 1;
    $("h2").text(ertek);

    //itt lehetne a .text helyett .html is, de előbbi a szebb

});

buttonElement = document.getElementById("btn2");
buttonElement.addEventListener('click', function (event) {
    //ha nem tudni, hogy egyáltalán eljut-e idáig, lehet nyomni egy alertet
    let ertek = $("h2").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek - 1;
    $("h2").text(ertek);
});
*/