"use strict";
// Arrays 
var Subjekt = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dambeldor"];
var Praedikat = ["liebt", "fliegt", "braut", "zaubert", "zerstört", "hasst"];
var Objekt = ["Zaubertränke", "einen Dementor", "Hogwarts", "den Stein der Weisen", "die Karte des Rumtreibers", "Malfoy"];
// Prüfung der Arrays in Console
// console.log(Subjekt);
// console.log(Praedikat);
// console.log(Objekt);
// for-Schleife - Konsolenausgabe der Sätze
for (var i = Subjekt.length; i >= 2; i--) { }
;
// console.log(i);
console.log(getVerse(Subjekt, Praedikat, Objekt));
// function getVerse - Erster Versuch
// window.onload = function getVerse() {
//     console.log(Subjekt[1], Praedikat[1], Objekt[1]);
//     console.log("Alohomora");
//     console.log(Subjekt);
//     console.log(Praedikat);
//     console.log(Objekt);
//     console.log (i = Subjekt[1]);
// } 
// funtion getVerse - Finaler  Versuch / Version
function getVerse(_Subjekt, _Praedikat, _Objekt) {
    // Variable String, welche Satz später aufnimmt
    var satz = "";
    // Subjekt 
    let zufallSubjekt = Math.floor(Math.random() * _Subjekt.length);
    let splicedSubjekt = _Subjekt.splice(zufallSubjekt, 1)[0];
    satz = satz + " " + splicedSubjekt;
    // Prädikat
    let zufallPreadikat = Math.floor(Math.random() * _Praedikat.length);
    let splicedPraedikat = _Praedikat.splice(zufallPreadikat, 1)[0];
    satz = satz + " " + splicedPraedikat;
    // Objekt
    let zufallObjekt = Math.floor(Math.random() * _Objekt.length);
    let splicedObjekt = _Objekt.splice(zufallObjekt, 1)[0];
    satz = satz + " " + splicedObjekt;
    return satz;
}
//# sourceMappingURL=L01.js.map