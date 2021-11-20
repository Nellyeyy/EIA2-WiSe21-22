"use strict";
var sequenzMemory;
(function (sequenzMemory) {
    let sequenz = "A";
    window.addEventListener("load", gameload);
    function gameload(_event) {
        let game = document.querySelector("div#gameboard");
        game.addEventListener("click", placeLetter);
        document.addEventListener("keydown", choosesequenz);
    }
    function placeLetter(_event) {
        let x = _event.offsetX;
        let y = _event.offsetY;
        let game = _event.target;
        let span = document.createElement("span");
        game.appendChild(span);
        span.textContent = sequenz;
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.addEventListener("click", deleteLetter);
    }
    function choosesequenz(_event) {
        sequenz = _event.key;
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(sequenzMemory || (sequenzMemory = {}));
//# sourceMappingURL=memory.js.map