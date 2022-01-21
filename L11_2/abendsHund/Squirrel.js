"use strict";
var L11_2_GoldenerHerbst;
(function (L11_2_GoldenerHerbst) {
    class Squirrel extends L11_2_GoldenerHerbst.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11_2_GoldenerHerbst.Vector(0, 0);
            this.velocity = new L11_2_GoldenerHerbst.Vector(-200, 0);
        }
        draw() {
            //Körper        
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.save();
            L11_2_GoldenerHerbst.crc2.translate(-200 + this.position.x, 20 + this.position.y);
            L11_2_GoldenerHerbst.crc2.fillStyle = "black";
            L11_2_GoldenerHerbst.crc2.arc(130, 19, 30, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.arc(85, 0, 20, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            //Auge
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.fillStyle = "brown";
            L11_2_GoldenerHerbst.crc2.arc(85, -5, 2.5, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            //Nase
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.fillStyle = "black";
            L11_2_GoldenerHerbst.crc2.arc(70, 0, 8, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            //Ohr
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.fillStyle = "black";
            L11_2_GoldenerHerbst.crc2.arc(95, -18, 12, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            // Beine
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.fillStyle = "black";
            L11_2_GoldenerHerbst.crc2.arc(150, 50, 10, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.arc(120, 50, 10, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            //Schwanz
            L11_2_GoldenerHerbst.crc2.beginPath();
            L11_2_GoldenerHerbst.crc2.fillStyle = "black";
            L11_2_GoldenerHerbst.crc2.arc(170, -12, 7, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.arc(167, 0, 7, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.arc(+160, 10, 7, 0, 2 * Math.PI);
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.fill();
            L11_2_GoldenerHerbst.crc2.restore();
            L11_2_GoldenerHerbst.crc2.closePath();
            L11_2_GoldenerHerbst.crc2.beginPath();
        }
    }
    L11_2_GoldenerHerbst.Squirrel = Squirrel;
})(L11_2_GoldenerHerbst || (L11_2_GoldenerHerbst = {}));
//# sourceMappingURL=Squirrel.js.map