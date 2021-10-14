// Arrays 
    var Subjekt: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape","Dambeldor"];
    var Praedikat: string[] = ["liebt", "fliegt", "braut", "zaubert", "zerstört","hasst"];
    var Objekt: string[] = ["Zaubertränke", "einen Dementor", "Hogwarts", "den Stein der Weisen", "die Karte des Rumtreibers","Malfoy"];
    
// Prüfung der Arrays in Console
    // console.log(Subjekt);
    // console.log(Praedikat);
    // console.log(Objekt);

// for-Schleife - Konsolenausgabe der Sätze
    for (var i = Subjekt.length; i >= 2; i--){};
    // console.log(i);
    console.log(getVerse(Subjekt, Praedikat,Objekt));



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
    function getVerse(_Subjekt: string[], _Praedikat: string[], _Objekt: string[]): string {
        // Variable String, welche Satz später aufnimmt
        var satz: string = "";
    
        // Subjekt 
        let zufallSubjekt: number = Math.floor(Math.random() * _Subjekt.length);
        let splicedSubjekt: string = _Subjekt.splice(zufallSubjekt, 1)[0];
        satz = satz + " " + splicedSubjekt;
    
        // Prädikat
        let zufallPreadikat: number = Math.floor(Math.random() * _Praedikat.length);
        let splicedPraedikat: string = _Praedikat.splice(zufallPreadikat, 1)[0];
        satz = satz + " " + splicedPraedikat;
    
        // Objekt
        let zufallObjekt: number = Math.floor(Math.random() * _Objekt.length);
        let splicedObjekt: string = _Objekt.splice(zufallObjekt, 1)[0];
        satz = satz + " " + splicedObjekt;
    
        return satz;
    }