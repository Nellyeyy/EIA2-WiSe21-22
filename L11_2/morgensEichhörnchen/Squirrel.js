"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Squirrel extends L11_1_GoldenerHerbst.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_1_GoldenerHerbst.Vector(0, 0);
            this.velocity = new L11_1_GoldenerHerbst.Vector(-200, 0);
        }
        draw() {
            //Körper        
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.save();
            L11_1_GoldenerHerbst.crc2.translate(-200 + this.position.x, 20 + this.position.y);
            L11_1_GoldenerHerbst.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(132, -23, 20, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fill();
            //Auge
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "black";
            L11_1_GoldenerHerbst.crc2.arc(125, -27, 2.5, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fill();
            //Ohren
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "darkred";
            L11_1_GoldenerHerbst.crc2.arc(143, -38, 12, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fill();
            //Schwanz
            L11_1_GoldenerHerbst.crc2.beginPath();
            L11_1_GoldenerHerbst.crc2.fillStyle = "brown";
            L11_1_GoldenerHerbst.crc2.arc(167, -10, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(167, 0, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(+160, 30, 17, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(165, 10, 16, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.arc(165, 20, 16, 0, 2 * Math.PI);
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.fill();
            L11_1_GoldenerHerbst.crc2.restore();
            L11_1_GoldenerHerbst.crc2.closePath();
            L11_1_GoldenerHerbst.crc2.beginPath();
        }
    }
    L11_1_GoldenerHerbst.Squirrel = Squirrel;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Squirrel.js.map