"use strict";
//In Zusammenarbeit mit David Katalenic
var A03Memory;
(function (A03Memory) {
    document.querySelector("button")?.addEventListener("click", start);
    let inputArray = [];
    let userInput;
    let mixedArray = [];
    let cardsSpan;
    let bg;
    let inputs;
    // tslint:disable-next-line: variable-name
    let formData;
    function start() {
        document.getElementById("fsSpecial")?.classList.add("isHidden");
        let userInputfeldWert = document.getElementById("userInputfeld");
        userInput = userInputfeldWert.value;
        inputArray = userInput.split("");
        mixedArray = userInput.split("");
        mixIt(inputArray);
        createField();
    }
    function mixIt(_array) {
        let currentIndex = mixedArray.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [mixedArray[currentIndex], mixedArray[randomIndex]] = [mixedArray[randomIndex], mixedArray[currentIndex]];
        }
        console.log(inputArray);
        console.log(userInput);
        console.log(mixedArray);
        return _array;
    }
    function createField() {
        let letters = mixedArray.length - 1;
        while (letters >= 0) {
            let board = document.getElementById("Spielfeld");
            cardsSpan = document.createElement("span");
            board.appendChild(cardsSpan);
            cardsSpan.addEventListener("click", check);
            let letter = document.createElement("p");
            cardsSpan.appendChild(letter);
            letter.innerHTML = mixedArray[letters];
            letters--;
            setTimeout(function () { letter.classList.add("isHidden"); }, 5000);
        }
        //Haben wir bisher nicht lösen können, warum dat nicht geht
        formData = new FormData(document.forms[0]);
        bg = inputs[1].value;
        document.body.style.backgroundColor = bg;
    }
    // Same here.
    function check(_event) {
        cardsSpan.classList.remove("isHidden");
        for (let i = 0; i <= mixedArray.length; i++) {
            let clickArray = [];
            let target = _event.target;
            let textContent = target.textContent;
            clickArray.push(textContent);
            if (inputArray[i] == clickArray[i] && i == mixedArray.length) {
                alert("Gut Gemacht! Gleich nochmal!");
            }
            else if (inputArray[i] != clickArray[i]) {
                alert("Versuche es nochmal.");
            }
        }
    }
})(A03Memory || (A03Memory = {}));
//# sourceMappingURL=memory.js.map