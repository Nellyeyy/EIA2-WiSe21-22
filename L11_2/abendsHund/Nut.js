"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    class Nut extends L11_2_GoldenerHerbst.Moveable {
        wasEaten;
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.arc(this.position.x, this.position.y, 7, 0, 5 * Math.PI);
            L11_2_GoldenerHerbst.crc2.fillStyle = "yellow";
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
        }
    }
    L11_2_GoldenerHerbst.Nut = Nut;
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Nut.js.map