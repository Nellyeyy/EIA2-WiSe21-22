"use strict";
var L11_2_GoldenerHerbst1;
(function (L11_2_GoldenerHerbst1) {
    class Nut extends L11_2_GoldenerHerbst1.Moveable {
        wasEaten;
        constructor(_position) {
            super(_position);
        }
        draw() {
            L11_2_GoldenerHerbst1.crc2.save();
            L11_2_GoldenerHerbst1.crc2.beginPath();
            L11_2_GoldenerHerbst1.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst1.crc2.fillStyle = "brown";
            L11_2_GoldenerHerbst1.crc2.fill();
            L11_2_GoldenerHerbst1.crc2.restore();
        }
    }
    L11_2_GoldenerHerbst1.Nut = Nut;
})(L11_2_GoldenerHerbst1 || (L11_2_GoldenerHerbst1 = {}));
//# sourceMappingURL=Nut.js.map