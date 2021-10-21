"use strict";
var RandomPoem;
(function (RandomPoem) {
    // Arrays 
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dambeldor"];
    let verb = ["liebt", "fliegt", "braut", "zaubert", "zerstört", "hasst"];
    let object = ["Zaubertränke", "einen Dementor", "Hogwarts", "den Stein der Weisen", "die Karte des Rumtreibers", "Malfoy"];
    // Prüfung der Arrays in Console
    // console.log(subject);
    // console.log(verb);
    // console.log(object);
    // for-Schleife - Konsolenausgabe der Sätze
    for (let i = subject.length; i >= 2; i--) {
        // console.log(i);
        console.log(getVerse(subject, verb, object));
    }
    // function getVerse - Erster Versuch
    // window.onload = function getVerse() {
    //     console.log(subject[1], verb[1], object[1]);
    //     console.log("Alohomora");
    //     console.log(subject);
    //     console.log(verb);
    //     console.log(object);
    //     console.log (i = subject[1]);
    // } 
    // funtion getVerse - Finaler  Versuch / Version
    function getVerse(_subject, _verb, _object) {
        // Variable String, welche verse später aufnimmt
        let verse = "";
        // subject 
        let zufallsubject = Math.floor(Math.random() * _subject.length);
        let splicedsubject = _subject.splice(zufallsubject, 1)[0];
        verse = verse + " " + splicedsubject;
        // Prädikat
        let zufallPreadikat = Math.floor(Math.random() * _verb.length);
        let splicedverb = _verb.splice(zufallPreadikat, 1)[0];
        verse = verse + " " + splicedverb;
        // object
        let zufallobject = Math.floor(Math.random() * _object.length);
        let splicedobject = _object.splice(zufallobject, 1)[0];
        verse = verse + " " + splicedobject;
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=L01.js.map