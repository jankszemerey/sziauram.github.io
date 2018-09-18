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
    let secondPart = fonev[getRandomIntInclusive(0, fonev.length - 1)];
    let karomkodas = firstPart + (" ") + secondPart;
    generatedWordArr.push(karomkodas);
    return generatedWordArr;
}

$(document).ready(function(){
	$("button").on("click", function(){
        $("#quoteDisplay").text(generatedWord());
	});
});

