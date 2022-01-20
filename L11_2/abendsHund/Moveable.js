"use strict";
var L11_1_GoldenerHerbst;
(function (L11_1_GoldenerHerbst) {
    class Moveable {
        position;
        velocity;
        size;
        expendable = false;
        eatRadius = 0;
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new L11_1_GoldenerHerbst.Vector(750, 470);
            this.velocity = new L11_1_GoldenerHerbst.Vector(1000, 0);
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11_1_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_1_GoldenerHerbst.crc2.canvas.height;
            if (this.position.x > L11_1_GoldenerHerbst.crc2.canvas.width)
                this.position.x -= L11_1_GoldenerHerbst.crc2.canvas.width;
            if (this.position.y > L11_1_GoldenerHerbst.crc2.canvas.height)
                this.position.y -= L11_1_GoldenerHerbst.crc2.canvas.height;
        }
    }
    L11_1_GoldenerHerbst.Moveable = Moveable;
})(L11_1_GoldenerHerbst || (L11_1_GoldenerHerbst = {}));
//# sourceMappingURL=Moveable.js.map